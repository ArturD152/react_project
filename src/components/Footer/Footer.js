import React from 'react'
import './Footer.css'
import phone from '../assets/img/phone.png'
import letter from '../assets/img/letter.png'
import telegram from '../assets/img/tg.png'
import instagram from '../assets/img/inst.png'
import facebook from '../assets/img/facebook.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__flex">
                <div className="footer__flex-block1">
                    <h5 className="footer__flex-title">
                        Контакты
                    </h5>
                    <div className="footer__flex-number">
                        <img src={phone}/>
                        <a href="#" className="footer__flex-num_link">
                            +7 (953) 070-88-28
                        </a>
                    </div>
                    <div className="footer__flex-number">
                        <img src={phone}/>
                        <a href="#" className="footer__flex-num_link">
                            +7 (953) 070-88-28
                        </a>
                    </div>
                    <div className="footer__flex-number">
                        <img src={letter} alt="letter"/>
                        <a href="#" className="footer__flex-num_link">
                            info_example@gmail.ru
                        </a>
                    </div>
                </div>
                <div className="footer__flex-block2">
                    <h5 className="footer__flex-title">
                        Информация
                    </h5>
                    <div className="footer__flex-number">
                        <a href="#" className="footer__flex-num_link">
                            О компании
                        </a>
                    </div>
                    <div className="footer__flex-number">                      
                        <a href="#" className="footer__flex-num_link">
                            Новости
                        </a>
                    </div>
                    <div className="footer__flex-number">
                        <a href="#" className="footer__flex-num_link">
                            Достопремичательности
                        </a>
                    </div>
                </div>
                <div className="footer__flex-block1">
                    <h5 className="footer__flex-title">
                        Социальные сети
                    </h5>
                    <div className="footer__flex-number">
                        <img src={telegram} alt="phone"/>
                        <a href="#" class="footer__flex-num_link">
                            Telegram
                        </a>
                    </div>
                    <div className="footer__flex-number">
                        <img src={instagram} alt="phone"/>
                        <a href="#" className="footer__flex-num_link">
                            Instagram
                        </a>
                    </div>
                    <div className="footer__flex-number">
                        <img src={facebook} alt="letter"/>
                        <a href="#" className="footer__flex-num_link">
                            Facebook
                        </a>
                    </div>
                </div>
                <div className="footer__flex-block2">
                    <h5 className="footer__flex-title">
                        Города
                    </h5>
                    <div className="footer__flex-number">
                        <a href="#" className="footer__flex-num_link">
                            Москва
                        </a>
                    </div>
                    <div className="footer__flex-number">
                        <a href="#" className="footer__flex-num_link">
                            Санкт-Петербург
                        </a>
                    </div>
                    <div className="footer__flex-number">                      
                        <a href="#" className="footer__flex-num_link">
                            Казань
                        </a>
                    </div>
                    <div className="footer__flex-number">
                        <a href="#" className="footer__flex-num_link">
                            Краснодар
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;