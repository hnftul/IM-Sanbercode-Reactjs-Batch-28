import React, { useContext, useState } from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"
import front from '../Assets/img/game.jpg'
import { Form, Input, Button, message } from 'antd';

const Register = () => {
    let history = useHistory()
    const [input, setInput] = useState({ name: "", email: "", password: "" })

    const onFinish = (values) => {
        const handleSubmit = async () => {
            try{
                await axios.post(`https://backendexample.sanbersy.com/api/register`, {
                    name: values.name,
                    email: values.email,
                    password: values.password
                })
                message.success('Register success. Please login', 2);
                history.push('/login')
            } catch(err) {
                message.error('Email has already been take or the password is too short', 2);
            }
        }
        handleSubmit()
        setInput({
            name: "",
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
                            <h1>Welcome,<br/>Signup Here </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <br/><br/><br/>
                            <Link to="/login"><button >Login</button></Link>
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
                            label="Name"
                            name="name"
                            style={{display: 'inline'}}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input className="login-input"/>
                        </Form.Item>
                        <br/>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
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
                            Signup
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
     
        </>
    )
}

export default Register