import { useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie"
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import front from '../Assets/img/pw.jpg'

const ChangePassword = () => {
    const history = useHistory();

    const [input, setInput] = useState({
        currentpassword: "",
        newpassword: "",
        confirmpassword: ""
    })

    const onFinish = (values) => {
        const handleSubmit = async () => {
            try{
                if (values.newpassword !== values.confirmpassword) {
                    message.error('Confirm password doesn\'t match',2);
                }
                let result = await axios.post(`https://backendexample.sanbersy.com/api/change-password`, {
                    current_password: values.currentpassword,
                    new_password: values.newpassword,
                    new_confirm_password: values.confirmpassword},
                    {headers: {
                        "Authorization" : "Bearer "+ Cookies.get('token')
                    }
                })
                message.success('Password changed', 1);
                history.push('/movie')
            } catch(err) {
                if (values.newpassword === values.confirmpassword) {
                    message.error('Current password incorect',2);
                }
            }
        }
        handleSubmit()
        setInput({
            currentpassword: "",
            newpassword: "",
            confirmpassword: ""
        })
    };
  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return ( 
    <div className="card-login" style={{marginTop:'70px'}}>
        <div className="wallpaper">
            <img src={front} alt="" className="gambar"/>
            <div className="gambartulisan">
                <h1 style={{fontSize: "55px"}}>Change<br/>Password Here.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

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
                label="Current Password"
                name="currentpassword"
                rules={[{ required: true, message: 'Please input your current password!' }]}
                style={{display: 'inline'}}
            >
                <Input.Password className="login-input"/>
            </Form.Item>
            <br/>
            <Form.Item
                label="New Password"
                name="newpassword"
                rules={[{ required: true, message: 'Please input your new password!' }]}
                style={{display: 'inline'}}
            >
                <Input.Password className="login-input"/>
            </Form.Item>
            <br/>
                <Form.Item
                    label="Confirm Password"
                    name="confirmpassword"
                    rules={[{ required: true, message: 'Please input your confirm password!' }]}
                    style={{display: 'inline'}}
                >
                    <Input.Password className="login-input"/>
                </Form.Item>
            <br/><br/>
            <Form.Item wrapperCol={{ offset: 28, span: 28 }}>
                <Button type="primary" htmlType="submit" style={{height:'45px', borderRadius:'5px'}}>
                Change Password
                </Button>
            </Form.Item>
        </Form>
    </div>
  );
};

export default ChangePassword;
