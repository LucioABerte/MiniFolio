import React from 'react'
import './footer.css'
import { AiOutlineArrowUp } from "react-icons/ai";
import { ThemeContextConsumer } from '../../context/ThemeContext';

const Footer = (props) => {
  return (
    <ThemeContextConsumer>
      {context => ( 
        <div className={`${context.theme}-theme`}>
            <footer className="footer-container">
                <span className="footer__copy">
                    &#169; Developed By Lucio Berté
                <button className={`${context.theme}-theme to-top`} onClick={props.top}>
                  <AiOutlineArrowUp/>
                </button>
                </span>
            </footer>
        </div>    
      )}
    </ThemeContextConsumer>    
  )
}

export default Footer