import Cookies from "js-cookie"
import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import {UserContext} from "../Context/UserContext"
import axios from "axios"
import '../Assets/css/style.css';
import front from '../Assets/img/img.png'
import { Form, Input, Button, message } from 'antd';

const Login = () => {
    let history = useHistory()
    
    const { setLoginStatus } = useContext(UserContext)

    const [input, setInput] = useState({
        email: "",
        password: ""

    })

    const onFinish = (values) => {
        const handleSubmit = async () => {
            try{
                let result = await axios.post(`https://backendexample.sanbersy.com/api/user-login`, {
                    email: values.email,
                    password: values.password
                })
    
                let data = result.data
                let token = data.token
    
                Cookies.set('token', token, {expires: 1})
                message.success('Login success', 1);
                history.push('/movie')
                setLoginStatus(true)
            } catch(err) {
                message.error('Email or password incorrect',2);
            }
        }
        handleSubmit()
        setInput({
            email: "",
            password: "",
         })
      };
      

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
            <div style={{background:'linear-gradient(to top right, rgb(1, 0, 5), 30%, #001529 )', minHeight: '100vh', top:0, width: '100%', position:'absolute'}}>
                <div className="card-login">
                    <div className="wallpaper">
                        <img src={front} alt="" className="gambar"/>
                        <div className="gambartulisan">
                            <h1>Welcome,<br/>Login Here.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <br/><br/><br/>
                            <Link to="/register"><button >Register</button></Link>
                            <Link to="/"><button >Home</button></Link>
                        </div>
                    </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 28 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            style={{display: 'inline'}}
                        >
                            <Input className="login-input"/>
                        </Form.Item>
                        <br/>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            style={{display: 'inline'}}
                        >
                            <Input.Password className="login-input"/>
                        </Form.Item>
                        <br/><br/>
                        <Form.Item wrapperCol={{ offset: 28, span: 28 }}>
                            <Button type="primary" htmlType="submit" style={{height:'45px', borderRadius:'5px'}}>
                            Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login