import React from "react"
import { Layout } from 'antd';
import {TwitterOutlined} from '@ant-design/icons'
import {InstagramFilled} from '@ant-design/icons'
import {FacebookFilled} from '@ant-design/icons'

const Footer = () => {
    const { Footer } = Layout;
    return (
        <>
            <Footer style={{ textAlign: 'center', color: "white", marginTop:'50px'}}>
                <div style={{marginBottom:'20px'}}>
                    <InstagramFilled style={{fontSize: '40px', marginRight:'20px'}} />
                    <TwitterOutlined style={{fontSize: '40px', marginRight:'20px'}}/>
                    <FacebookFilled style={{fontSize: '40px'}} />
                </div>
                <p style ={{ marginBottom:'0'}}><b>Terms of Use • Privacy Policy</b></p>
                <p style={{color: 'gray'}}>Syukriyatul Hanifa ©2021</p>
                
            </Footer>
        </>
    )
}

export default Footer
