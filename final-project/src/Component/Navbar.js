import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import Logo from "../Assets/img/logo.png"
import { Layout, Menu } from 'antd';
import Cookies from "js-cookie";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
    const { Header} = Layout;

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
            
            <Header className="site-layout-background" style={{backgroundColor:'unset'}}>
                <img src={Logo} className="logo" alt="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    {
                    Cookies.get('token') !== undefined &&
                        <>
                            <Menu.Item key="1" style={{position: 'absolute', right:'120px' }}>
                                <Link to="/game">Game</Link>
                            </Menu.Item>
                            <Menu.Item key="2" style={{position: 'absolute', right:'190px' }}>
                                <Link to="/movie">Movie</Link>
                            </Menu.Item>
                            <Menu.Item key="3" style={{position: 'absolute', right:'50px' }}>
                                <div style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</div>
                            </Menu.Item>
                            
                        </> 
                    }
                    {Cookies.get('token') === undefined && (
                        <>
                            <Menu.Item key="1" style={{position: 'absolute', right:'200px' }}>
                                <Link to="/game">Game</Link>
                            </Menu.Item>
                            <Menu.Item key="2" style={{position: 'absolute', right:'270px' }}>
                                <Link to="/movie">Movie</Link>
                            </Menu.Item>
                            <Menu.Item key="6" style={{position: 'absolute', right:'50px' }}>
                                <Link to="/login">Login</Link >
                            </Menu.Item>
                            <Menu.Item key="7" style={{position: 'absolute', right:'120px' }}>
                                <Link to="/register">Register</Link>
                            </Menu.Item>
                        </>
                    )}
                </Menu>
            </Header>         
        </>
    )
}

export default Navbar
