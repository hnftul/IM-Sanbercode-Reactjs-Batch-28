import React, {useEffect, useContext, useState} from "react";
import { Link } from "react-router-dom"
import logo from "../Assets/img/logo.png"
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../App.css';
import { MobileContext } from "../Context/mobileContext";
import axios from "axios"

const Nav = () => {    
    return(
        <>
            <div className="topnav">
                <Link to="">
                    <img src={logo} width="70" alt="logo" />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/mobile-list">Mobile List</Link>
                <Link to="/about">About</Link>
                <form>
                    <input style={{height:'28px', borderRadius:'20px', padding: '10px', outline:'none', border:'1 px solid #ddd' }} type="text" placeholder="Search Here"/>
                    <Button style={{marginLeft:'10px',height:'30px'}} shape="circle" type="primary" icon={<SearchOutlined />}></Button>
                    {/* <input type="submit" value="Cari" /> */}
                </form>
            </div> 
        </>
    )
}

export default Nav