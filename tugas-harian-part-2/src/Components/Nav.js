import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { ThemeContext } from "../Tugas-14/ThemeContext";
import './Nav.css'


const Nav = () => {
    
    const {theme, setTheme} = useContext(ThemeContext)

    const styleTheme = theme === "light" ? "light-nav" : "dark-nav"

    return(
        <nav className={styleTheme}>
            <ul>
              <li>
                <Link to="/">Tugas 9</Link>
              </li>
              <li>
                <Link to="/tugas10">Tugas 10</Link>
              </li>
              <li>
                <Link to="/tugas11">Tugas 11</Link>
              </li>
              <li>
                <Link to="/tugas12">Tugas 12</Link>
              </li>
              <li>
                <Link to="/tugas13">Tugas 13</Link>
              </li>
              <li>
                <Link to="/tugas14">Tugas 14</Link>
              </li>
            </ul>
        </nav>
    )
}

export default Nav