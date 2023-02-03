import React, { useState} from 'react'
const ThemeContext = React.createContext()

const ThemeContextProvider = (props) => { 

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )  
}

export {ThemeContextProvider, ThemeContext}