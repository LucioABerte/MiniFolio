import React from "react";
import "./tabs.css";

const FirstTab = () => {
  return (
        <div className="projects__content grid filters__active">

                <article className="projects__card animate__animated animate__fadeInRight animate__delay-0.7s">
                    <img src="lab.png" alt="img" className="projects__img" />

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle">Next TS App</span>
                            <h3 className="projects__title">LAB Home Studio</h3>
                            <a href="https://labhomestudio.netlify.app/" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://github.com/LucioABerte/LAB-Landing" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>

                <article className="projects__card animate__animated animate__fadeInRight animate__delay-0.7s">
                    <img src="fengshui.png" alt="img" className="projects__img" />

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle">React WebApp</span>
                            <h3 className="projects__title">Feng Shui</h3>
                            <a href="https://norafengshui.netlify.app/" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://norafengshui.netlify.app/" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>

                <article className="projects__card animate__animated animate__fadeInLeft animate__delay-0.6s">
                    <img src="Budget.png" alt="img" className="projects__img" />

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle"> MERN App </span>
                            <h3 className="projects__title">Budget App | Frontend Prototype </h3>
                            <a href="https://press-lucioaberte.netlify.app/" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://github.com/LucioABerte/PressApp" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>

                <article className="projects__card animate__animated animate__fadeInLeft animate__delay-0.6s">
                    <img src="Calendar.png" alt="img" className="projects__img" />

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle"> MERN App </span>
                            <h3 className="projects__title">Calendar App | Client-Server side</h3>
                            <a href="https://calendar-app-lucioaberte.vercel.app" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://github.com/LucioABerte/CalendarApp" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>

                <article className="projects__card animate__animated animate__fadeInLeft animate__delay-0.8s">
                    <img src="Journal.png" alt="img" className="projects__img"/>

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle">MERN App</span>
                            <h3 className="projects__title">Firebase Journal CRUD</h3>
                            <a href="https://journal-crud.vercel.app/" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://github.com/LucioABerte/JournalCrud" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>


                <article className="projects__card animate__animated animate__fadeInLeft animate__delay-1s">
                    <img src="tesla.png" alt="img" className="projects__img"/>

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle">React Web App</span>
                            <h3 className="projects__title">Tesla Clone Website</h3>
                            <a href="https://tesla-clone-lucioaberte.vercel.app/#" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://github.com/LucioABerte/TravelApp" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>

                <article className="projects__card animate__animated animate__fadeInRight animate__delay-0.5s">
                    <img src="wedding.png" alt="img" className="projects__img"/>

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle"> Sidebar App</span>
                            <h3 className="projects__title">Wedding App</h3>
                            <a href="https://jazminylucio.netlify.app/" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://github.com/LucioABerte/Wedding" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>

                {/*<article className="projects__card animate__animated animate__fadeInRight animate__delay-1s">
                    <img src="tenzies.png" alt="img" className="projects__img"/>

                    <div className="projects__modal">
                        <div>
                            <span className="projects__subtitle">React App</span>
                            <h3 className="projects__title">Tenzies Game</h3>
                            <a href="https://tenzies-game-lucioaberte.vercel.app/" target="_blank" className="projects__button button button__small">
                                <i className="ri-link"></i>
                            </a>
                            <a href="https://github.com/LucioABerte/TenziesGame" target="_blank" className="projects__button button button__small two">
                                <i className="ri-code-line"></i>
                            </a>
                        </div>
                    </div>
                </article>*/}

        </div>
  );
};
export default FirstTab;