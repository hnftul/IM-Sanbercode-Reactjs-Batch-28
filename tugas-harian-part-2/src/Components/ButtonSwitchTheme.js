import React, {useContext} from "react";
import { ThemeContext } from "../Tugas-14/ThemeContext";
import { Switch } from 'antd';

const ButtonSwitchTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <div style={{marginTop:'0px', textAlign: 'center'}}>
            <Switch defaultChecked style={{width:'10px', backgroundColor: 'gray'}}
                onClick={handleClick}>
                Change colour
            </Switch>
        </div>   
    )
}

export default ButtonSwitchTheme