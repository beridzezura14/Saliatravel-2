import video from '../assets/sea.mp4'
import logoFooter from '../assets/logo.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='background'>
                <div className="footer__content">
                    <div className="footer__main">
                        <div className="footer__items footer__logo">
                            <img src={logoFooter} alt="logo footer" />

                            <div>
                                <p><b>მისამართი</b> – გიორგი ლეონიძის ქ. #2, თბილისი, საქართველო</p>
                                <p><b>ტელეფონი</b> – <a href="tel:+995557171706">+995 557 17 17 06</a></p>
                                <p><b>იმეილი</b> – lannasalia@gmail.com</p>
                            </div>
                        </div>
                        <div className="footer__items footer__menu">
                            <h2>მენიუ</h2>

                            <ul>
                                <li><a href="/Home">მთავარი</a></li>
                                <li><a href="/About">ჩვენს შესახებ</a></li>
                                <li><a href="">ტურები</a></li>
                                <li><a href="/Contact">საკონტაქტო</a></li>
                            </ul>
                        </div>
                        <div className="footer__items footer__hours">
                            <h2>სამუშაო საათები</h2>

                            <div className="hours">
                                <div>
                                    <p>ორშაბათი - პარასკევი:</p>
                                    <p>11:00 - 18:00</p>
                                </div>
                                <div>
                                    <p>შაბათი - კვირა</p>
                                    <p className='closed'>დაკეტილია</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='last__line'>
                        <li className='icons'>
                            <a href="https://www.facebook.com/profile.php?id=100076234376477" target='blank'><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="https://www.instagram.com/saliatravel/" target='blank'><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="https://www.tiktok.com/@saliatravel?_t=8sR5boVvKbd&_r=1" target='blank'><ion-icon name="logo-tiktok"></ion-icon></a>
                        </li>
                        <p>
                            © SaliaTravel all Rights Reserved. 2025
                        </p>
                    </div>
                </div>
            </div>

            <video autoPlay muted loop playsInline>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/webm" />
                <source src={video} type="video/ogg" />
            </video>

        </div>
    )
}

export default Footer
