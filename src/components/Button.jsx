import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { BsMoon, BsSun } from "react-icons/bs";

const Button = (props) => {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (  
      <div className={theme === "light" ? "icon-light" : "icon-dark "}>
        <div  className="div-icon animate__animated animate__fadeInRight animate__delay-1s" 
              onClick={toggleTheme}>
          {theme === "light" ? <BsMoon /> : <BsSun/> }
        </div>
      </div>     
  )
}

export default Button
