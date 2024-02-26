import React from "react";
import "./tabs.css";

import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { FaCss3Alt , FaNodeJs, FaReact, FaBootstrap, FaSlack, FaNpm, FaFigma, FaGitAlt, FaPython, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMaterialui, SiTypescript,SiNextdotjs, SiStrapi, SiVercel, SiNetlify, SiRedux, SiReacttable, SiFramer, SiFirebase, SiJest, SiMongodb, SiExpress } from "react-icons/si"; 
import { IoLogoJavascript } from "react-icons/io5";


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
                                <SiNextdotjs className="i next"/>

                                <div>
                                    <h3 className="skills__name">Next.Js</h3>
                    
                                </div>
                            </div>
                            

                            <div className="skills__data">
                                <FaCss3Alt className="i css"/>

                                <div>
                                    <h3 className="skills__name">CSS3</h3>
                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiRedux className="i redux" />
    
                                <div>
                                    <h3 className="skills__name">Redux Toolkit</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiFramer className="i framer" />

                                <div>
                                    <h3 className="skills__name">Framer Motion</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiTailwindcss className="i tw" /> 

                                <div>
                                    <h3 className="skills__name">Tailwind</h3>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <FaReact className="i react"  />
    
                                <div>
                                    <h3 className="skills__name">React</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <IoLogoJavascript className="i js"/>

                                <div>
                                    <h3 className="skills__name">JavaScript</h3>
                                    
                                </div>
                            </div>
    
                            <div className="skills__data">
                                <SiReacttable className="i query" />
    
                                <div>
                                    <h3 className="skills__name">React Query</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiMaterialui className="i mui" />
    
                                <div>
                                    <h3 className="skills__name">Material UI</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiTypescript className="i type" />
    
                                <div>
                                    <h3 className="skills__name">Typescript</h3>
                                    
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
                                <FaNodeJs className="i node" />

                                <div>
                                    <h3 className="skills__name">Node Js</h3>
                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiExpress className="i express" />

                                <div>
                                    <h3 className="skills__name">Express.js</h3>
                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <FaDatabase className="i sql" />

                                <div>
                                    <h3 className="skills__name">SQL</h3>
                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiFirebase className="i fire" />

                                <div>
                                    <h3 className="skills__name">Firebase</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <img src="jwt.png" alt="jason web token" className="i jwt"/>

                                <div>
                                    <h3 className="skills__name">JWT</h3>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <FaPython className="i py" />
    
                                <div>
                                    <h3 className="skills__name">Python</h3>
                    
                                </div>
                            </div>
    
                            <div className="skills__data">
                                <FaSlack className="i slack" />
    
                                <div>
                                    <h3 className="skills__name">Slack</h3>
                    
                                </div>
                            </div>
    
                            <div className="skills__data">
                                <SiJest className="i jest" />
    
                                <div>
                                    <h3 className="skills__name">Jest</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <SiMongodb className="i mongo" />

                                <div>
                                    <h3 className="skills__name">MongoDB</h3>
                                    
                                </div>
                            </div>

                            <div className="skills__data">
                                <AiOutlineGithub className="i hub" />

                                <div>
                                    <h3 className="skills__name">GitHub</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  );
};
export default SecondTab;