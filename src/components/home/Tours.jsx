// import React from 'react'
import { ToursData } from '../../Data'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
import bus from '../../assets/bus.png'
// import bus2 from '../../assets/bus2.png'




function Tours() {
    useEffect(() => {
        gsap.fromTo('.bus', {
            x: '0vw',
            duration: 1,
        }, {
            x: '28vw',
            duration: 1,
            scrollTrigger: {
                trigger: '.bus',
                scrub: true,
            }
        })
    })
    return (
        <div className='tours'>
            <div className='tours-head'>
                <h2>ტურები</h2>
                <div className='bus-div'>
                    <img className='bus' src={bus} alt="" />
                    {/* <img src={bus2} alt="" /> */}
                </div>

            </div>
            <div className='tours-content' >
                {ToursData.map(item => (
                    <div className='cards' key={item.id}>
                        <img src={item.img} alt={item.head} />
                        <h3 title={item.head}>{item.head}</h3>
                        <p>{item.includes}</p>
                        <Link className='btn' state={{ from: '/' }} to={`/product/${item.id}`}><button>მეტი</button></Link>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Tours
