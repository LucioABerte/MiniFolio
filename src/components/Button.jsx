import React from "react"
import { ThemeContextConsumer } from "../context/ThemeContext"
import { BsMoon, BsSun } from "react-icons/bs";

const Button = (props) => {
  return (
    <ThemeContextConsumer>
        {context => (  
            <div className={context.theme === "light" ? "icon-light" : "icon-dark "}>
              <div  className="div-icon animate__animated animate__fadeInRight animate__delay-1s" 
                    onClick={context.toggleTheme}>
                {context.theme === "light" ? <BsMoon /> : <BsSun/> }
              </div>
            </div>     
        )}
      </ThemeContextConsumer>
  )
}

export default Button
