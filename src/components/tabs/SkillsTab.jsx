import React from "react";
import "./tabs.css";

import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { FaCss3Alt , FaNodeJs, FaReact, FaBootstrap, FaSlack, FaNpm,FaFigma, FaGitAlt,FaPython,FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMaterialui, SiStrapi, SiVercel, SiNetlify } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiRuby } from "react-icons/di";

const SecondTab = () => {
  return (
        <div className="skills__content grid" data-content id="skills">
                <div className="skills__area animate__animated animate__fadeIn animate__delay-0.7s">
                    <h3 className="skills__title">
                        FrontEnd Developer
                    </h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <AiOutlineHtml5 className="i"/>

                                <div>
                                    <h3 className="skills__name">HTML5</h3>
                                    <span className="skills_level">Advanced</span>
                                </div>
                            </div>
                            

                            <div className="skills__data">
                                <FaCss3Alt className="i"/>

                                <div>
                                    <h3 className="skills__name">CSS3</h3>
                                    <span className="skills_level">Advanced</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <IoLogoJavascript className="i"/>

                                <div>
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <FaBootstrap className="i" />

                                <div>
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiTailwindcss className="i" /> 

                                <div>
                                    <h3 className="skills__name">Tailwind</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <FaReact className="i" />
    
                                <div>
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>
    
                            <div className="skills__data">
                                <FaNpm className="i" />
    
                                <div>
                                    <h3 className="skills__name">NPM</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>
    
                            <div className="skills__data">
                                <SiVite className="i" />
    
                                <div>
                                    <h3 className="skills__name">Vite</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiMaterialui className="i" />
    
                                <div>
                                    <h3 className="skills__name">Material UI</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <FaFigma className="i" />
    
                                <div>
                                    <h3 className="skills__name">Figma</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="skills__area animate__animated animate__fadeIn animate__delay-0.99s">
                    <h3 className="skills__title">
                        BackEnd Developer
                    </h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <FaNodeJs className="i" />

                                <div>
                                    <h3 className="skills__name">Node Js</h3>
                                    <span className="skills_level">Beginner</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiStrapi className="i" />

                                <div>
                                    <h3 className="skills__name">Strapi</h3>
                                    <span className="skills_level">Beginner</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <FaDatabase className="i" />

                                <div>
                                    <h3 className="skills__name">SQL</h3>
                                    <span className="skills_level">Beginner</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <DiRuby className="i" />

                                <div>
                                    <h3 className="skills__name">Ruby</h3>
                                    <span className="skills_level">Beginner</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <FaGitAlt className="i" />

                                <div>
                                    <h3 className="skills__name">Git</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <FaPython className="i" />
    
                                <div>
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills_level">Beginner</span>
                                </div>
                            </div>
    
                            <div className="skills__data">
                                <FaSlack className="i" />
    
                                <div>
                                    <h3 className="skills__name">Slack</h3>
                                    <span className="skills_level">Beginner</span>
                                </div>
                            </div>
    
                            <div className="skills__data">
                                <SiVercel className="i" />
    
                                <div>
                                    <h3 className="skills__name">Vercel</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiNetlify className="i" />

                                <div>
                                    <h3 className="skills__name">Netlify</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <AiOutlineGithub className="i" />

                                <div>
                                    <h3 className="skills__name">GitHub</h3>
                                    <span className="skills_level">Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  );
};
export default SecondTab;