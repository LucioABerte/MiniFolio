import React, { useContext, useState } from 'react'
import "./tabs.css";
import { ThemeContext } from '../../context/ThemeContext';

import FirstTab from "./ProjectTab"
import SecondTab from './SkillsTab';

const Tabs = () => {
  
  const {theme} = useContext(ThemeContext)

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
      <div className={`${theme}-theme`}>
        <div className="Tabs animate__animated animate__fadeInUp animate__delay-1s">
            <ul className="nav">
              <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Projects</li>
              <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Skills</li>
            </ul>
            <div className="outlet">
              {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
        </div>
      </div>  
  )
}

export default Tabs