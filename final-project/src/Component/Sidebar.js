import Cookies from "js-cookie"
import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Layout, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {UserContext} from "../Context/UserContext"

const Sidebar = (props) => {
    const { Sider} = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState (false)
    const movieIcon = <FontAwesomeIcon icon={faFilm} style ={{marginRight: '9px'}}/>
    const gameIcon = <FontAwesomeIcon icon={faGamepad} style ={{marginRight: '5px'}}/>
    const userIcon = <FontAwesomeIcon icon={faUser} style ={{marginRight: '9px'}}/>
    const handleToggle = () => {
        setCollapsed(!collapsed)
    }
    const { setLoginStatus } = useContext(UserContext)
    let history = useHistory()
    const handleLogout = () => {
      setLoginStatus(false)
      Cookies.remove('user')
          Cookies.remove('email')
          Cookies.remove('token')
      history.push('/login')
    }
    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={handleToggle} style={{backgroundColor:'#030b17'}}>
                <Menu theme="dark" mode="inline" style={{backgroundColor:'#030b17'}}>
                    <SubMenu key="sub1" icon={movieIcon} title="Movie" style={{marginTop: '50px'}}>
                        <Menu.Item key="8">
                            <Link to="/movie/list">Edit Movie</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/movie/create">Add Movie</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={gameIcon} title="Game">
                        <Menu.Item key="10">
                            <Link to="/game/list">Edit Game</Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link to="/game/create">Add Game</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={userIcon} title="User">
                        <Menu.Item key="12">
                            <Link to="/user/change-password">Change Password</Link >
                        </Menu.Item>
                        <Menu.Item key="13">
                            <div style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</div>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    )

}

export default Sidebar
