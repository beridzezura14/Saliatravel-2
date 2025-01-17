
import img1 from '../../assets/hero-img/egypt.jpg';
import img2 from '../../assets/hero-img/dubai.jpg';
import img3 from '../../assets/hero-img/turkey.jpg';
import img4 from '../../assets/hero-img/img1.jpg';
import img5 from '../../assets/hero-img/zanzibar.jpg';

import logodesktop from '../../assets/logo.png'

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { gsap } from 'gsap';

const slideList = [
    {
        id: 1,
        img: img1,
        header: "ეგვიპტე",
        paragraph: "აღმოჩნდებით ფარაონების საიდუმლო სამყაროში, პირამიდებისა და სფინქსის წინაშე, ნილოსის ნაპირებსა და უდაბნოს მზის ჯადოსნურ ჩასვლებში."
    },
    {
        id: 2,
        img: img2,
        header: "დუბაი",
        paragraph: "ბრწყინვალე ცათამბჯენები, ოქროსფერი უდაბნოს სილამაზე და არაბული კულტურის ჯადოსნური სამყაროს კომბინაცია."
    },
    {
        id: 3,
        img: img3,
        header: "თურქეთი",
        paragraph: "ისიამოვნეთ უძველესი ისტორიისა და კულტურის სიმდიდრით, ბოსფორის უნიკალური ხიბლით, კაპადოკიის ჯადოსნური ლანდშაფტებითა და ხმელთაშუა ზღვის შთამბეჭდავი სანაპიროებით."
    },
    {
        id: 4,
        img: img4,
        header: "ტაილანდი",
        paragraph: "იმოგზაურე ულამაზეს კუნძულებზე და განიტვირთე ოქროსფერ სანაპიროებზე, მოინახულე მსოფლიო მასშტაბით ცნობილი ტაძრები და შექმენი დაუვიწყარი მოგონებები"
    },
    {
        id: 5,
        img: img5,
        header: "ზანზიბარი",
        paragraph: "აღმოაჩინე ტროპიკული სამოთხე, დაისვენე თეთრი ქვიშის სანაპიროებზე, დატკბი ულამაზესი ზღვით და აღმოაჩინე აფრიკის უნიკალური კულტურა."
    },
];

function Hero() {
    const swiperRef = useRef(null);
    const changeRef = useRef(null);

    // Function to reset GSAP animations and trigger them
    const animateSlide = (swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const header = activeSlide.querySelector('h1');
        const paragraph = activeSlide.querySelector('p');

        // Reset previous animations before applying new ones
        gsap.killTweensOf(header);
        gsap.killTweensOf(paragraph);

        gsap.fromTo(
            header,
            { opacity: 0, y: 200, rotation: 5, },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                rotation: 0,
                ease: 'power1.out',
            }
        );

        gsap.fromTo(
            paragraph,
            { opacity: 0, y: 200, rotation: 5, },
            {
                opacity: 1,
                rotation: 0,
                y: 0,
                duration: 1,
                delay: 0.2,
                ease: 'power1.out',
            }
        );
    };

    useEffect(() => {
        // Initial animation for the first slide
        if (swiperRef.current) {
            animateSlide({ activeIndex: 0, slides: swiperRef.current.querySelectorAll('.swiper-slide') });
        }

        // Clean up animations on component unmount
        return () => {
            gsap.killTweensOf('.swiper-slide h1, .swiper-slide p');
        };
    }, []);


    return (
        <div className='hero'>
            <div className="logodesktop">
                <img src={logodesktop} alt="" />
            </div>
            <div className='hero-content' ref={swiperRef}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true, el: '.swiper-pagination', }}
                    scrollbar={{ draggable: true }}
                    slidesPerView={1}
                    onSwiper={(swiper) => (changeRef.current = swiper)}
                    onSlideChange={(swiper) => animateSlide(swiper)}  // Trigger animation on slide change
                >
                    {slideList.map(item => (
                        <SwiperSlide className='swiper' key={item.id}>
                            <div className='swiper-item' style={{
                                background: ` linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(${item.img})no-repeat center center / cover`,
                                height: "90dvh",
                                // margin: "3dvh",
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                color: "#ffffff"
                            }}>
                                <div className='opacity'>
                                    <h2>{item.header}</h2>
                                </div>
                                <div className='text'>
                                    <div className='ofset'>
                                        <h1>{item.header}</h1>
                                    </div>
                                    <div className='ofset'>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                    <div className='arr'>
                        <button onClick={() => changeRef.current.slidePrev()}><ion-icon name="chevron-back-outline"></ion-icon></button>
                        <button onClick={() => changeRef.current.slideNext()}><ion-icon name="chevron-forward-outline"></ion-icon></button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero



// linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.67)), 