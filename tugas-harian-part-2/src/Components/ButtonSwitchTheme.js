import React, {useContext} from "react";
import { ThemeContext } from "../Tugas-14/ThemeContext";

const ButtonSwitchTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <div style={{marginTop:'20px', textAlign: 'center'}}>
            <button style={{width:'200px', backgroundColor: 'gray'}}
                onClick={handleClick}>
                Change colour
            </button>
        </div>   
    )
}

export default ButtonSwitchTheme