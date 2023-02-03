import React, { useContext } from 'react'
import "./header.css"
import 'animate.css';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../Button'

const Header = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`${theme}-theme`}>
            <header className="profile container" >
                <div className="profile__container grid">
                    <div className="profile__data">
                        <div className="profile__border animate__animated animate__fadeInDown animate__delay-0.5s">
                            <div className="profile__perfil">
                                <img src="lucio.png" alt="img" />
                            </div>
                        </div>                          
                        <h2 className="profile__name animate__animated animate__fadeInDown animate__delay-0.6s">
                            Lucio Berté
                        </h2>
                        <h3 className="profile__profession animate__animated animate__fadeInDown animate__delay-0.7s"> 
                            Junior FullStack Developer
                        </h3>
                        <ul className="profile__social animate__animated animate__fadeInDown animate__delay-0.8s">
                            <a href="https://portfolio-lucioaberte.vercel.app/" target="_blank" className="profile__social-link">
                                <i className="ri-home-4-line"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/lucioabert%C3%A9/" target="_blank" className="profile__social-link">
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                            <a href="https://github.com/LucioABerte" target="_blank" className="profile__social-link">
                                <i className="ri-github-line"></i>
                            </a>
                        </ul>      
                    </div>
              
                    <div className="profile__info grid animate__animated animate__fadeInLeft animate__delay-0.9s">
                        <div className="profile__info-group">
                            <h3 className="profile__info-number">+1</h3>
                            <p className="profile__info-description">
                                Years of <br/> work
                            </p>
                        </div>
                        <div className="profile__info-group">
                            <h3 className="profile__info-number">+8</h3>
                            <p className="profile__info-description">
                                completed <br/> projects
                            </p>
                        </div>
                        <div className="profile__info-group">
                            <h3 className="profile__info-number">+1</h3>
                            <p className="profile__info-description">
                                Specializing in <br/> ReactJS
                            </p>
                        </div>
                    </div>
                         
                    <div className="profile__buttons">

                            <a download="" href="LucioBertéCv.pdf" target="_blank" className="button animate__animated animate__fadeInLeft animate__delay-09s">
                                Download CV <i className="ri-download-2-line"></i>
                            </a>

                        <div className="profile__buttons-small animate__animated animate__fadeInRight animate__delay-1.1s">
                            <a href="https://api.whatsapp.com/send/?phone=5492235585610&text&type=phone_number&app_absent=0" target="_blank" className="button button__small button__gray">
                                <i className="ri-whatsapp-line"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/lucioabert%C3%A9/" target="_blank" className="button button__small button__gray">
                                <i className="ri-messenger-line"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </header>
            <Button />
        </div> 
    )
}

export default Header

