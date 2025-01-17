import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import spain from "../../assets/country/spain.jpg"
import egypt from "../../assets/country/egypt.jpg"
import turkey from "../../assets/country/turkey.jpg"
import italy from "../../assets/country/italy.webp"
import czech from "../../assets/country/czech.jpg"
import france from "../../assets/country/france.webp"
import india from "../../assets/country/india.jpg"
import thailand from "../../assets/country/thailand.jpg"


const country = [
    {
        country: "ესპანეთი",
        img: spain,
    }, 
    {
        country: "ეგვიპტე",
        img: egypt,
    }, 
    {
        country: "თურქეთი",
        img: turkey,
    }, 
    {
        country: "იტალია",
        img: italy,
    }, 
    {
        country: "ჩეხეთი",
        img: czech,
    }, 
    {
        country: "საფრანგეთი",
        img: france,
    }, 
    {
        country: "ინდოეთი",
        img: india,
    }, 
    {
        country: "ტაილანდი",
        img: thailand,
    }, 
]
function Country() {
    const swiperRef = useRef(null);
    const changeRef = useRef(null);

    const [slidesToShow, setSlidesToShow] = useState(4); // Default value

    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1.1); // For mobile devices
    //   } else if (window.innerWidth < 1024) {
    //     setSlidesToShow(2.2); // For tablets
    //   } else if (window.innerWidth < 1300) {
    //     setSlidesToShow(2.2); // For tablets
      } else {
        setSlidesToShow(2.3); // For larger screens
      }
    };
    useEffect(() => {
        updateSlidesToShow(); // Update on mount
        window.addEventListener('resize', updateSlidesToShow); // Update on resize
        return () => window.removeEventListener('resize', updateSlidesToShow);
      }, []);

    return (
        <div className='country'>
            <div className="country-content">
                <div className='head'>
                    <h2>პოპულარული ქვეყნები</h2>
                    <div className='arr'>
                            <button onClick={() => changeRef.current.slidePrev()}><ion-icon name="chevron-back-outline"></ion-icon></button>
                            <button onClick={() => changeRef.current.slideNext()}><ion-icon name="chevron-forward-outline"></ion-icon></button>
                    </div>
                </div>
                {/* <div cl> </div> */}
                <div ref={swiperRef}>
                    <Swiper 
                        className='country-slide'
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true, el: '.swiper-pagination', }}
                        spaceBetween={20} 
                        // centeredSlides={true} 
                        slidesPerView={slidesToShow}
                        onSwiper={(swiper) => (changeRef.current = swiper)}
                    >
                        {country.map((item, i) => (
                            <SwiperSlide className='coutry-item' key={i}>
                                <div className='item' style={{
                                    background: `linear-gradient(#00000086,hsla(184, 68.90%, 42.90%, 0.64)), url(${item.img})no-repeat center center / cover`,
                                }} >
                                    {/* <img src={item.img} style={{width: "100px"}} alt="" /> */}
                                    <h3>{item.country}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination swiper-pagination"></div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Country
