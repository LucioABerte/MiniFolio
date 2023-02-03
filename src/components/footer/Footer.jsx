import React, { useContext } from 'react'
import './footer.css'
import { AiOutlineArrowUp } from "react-icons/ai";
import { ThemeContext } from '../../context/ThemeContext';

const Footer = (props) => {

  const {theme} = useContext(ThemeContext)

  return (
      <div className={`${theme}-theme`}>
          <footer className="footer-container">
              <span className="footer__copy">
                  &#169; Developed By Lucio Berté
              <button className={`${theme}-theme to-top`} onClick={props.top}>
                <AiOutlineArrowUp/>
              </button>
              </span>
          </footer>
      </div>    
  )
}

export default Footer