import React from "react"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"
import { Layout } from 'antd';
import Sidebar from "../Component/Sidebar";
import Cookies from "js-cookie";

const LayoutComponent = (props) => {
    const {  Content } = Layout;
    return (
        <>
            <Layout style={{ minHeight: '100vh'}}>
                {
                    Cookies.get('token') !== undefined &&
                    <Sidebar/>
                }
                
                <Layout className="site-layout" style={{ background:'linear-gradient(to bottom left, rgb(1, 0, 5), 7%, #001529 )'}}>
                    <Navbar />
                    <Content style={{ margin: '0'}}>
                        {props.content}
                    </Content>
                    <Footer/>
                </Layout>
            </Layout>
        </>
    )

}

export default LayoutComponent
