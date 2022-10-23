import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { registerAPI } from "../../services/auth.services";
import style from "./register.module.css"

const initialData = {
    firstName : "",
    lastName : "",
    userName : "",
    email : "",
    password : ""
}

const Register = () => {

    const [data, setData] = useState(initialData);

    const handleChanger = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const formSubmitHandler = () => {
        const payload = data
        registerAPI(payload).then(res => {
            console.log(res, "Res")
        })
        // console.log(payload)
    }

    return <div className={style.loginContainer} >
        <h1>Sign Up</h1>
        <Form
            className={style.formBox}
            name="basic"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            // initialValues={{ remember: true }}
              onFinish={() => {
                formSubmitHandler();
              }}
              onFinishFailed={() => {
                console.log("failed")
              }}
            autoComplete="off"
        >
            <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'First Name is required!' }]}
            >
                <Input className={style.fields} placeholder="First Name" name="firstName" onChange={handleChanger} />
            </Form.Item>

            <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Last Name is required!' }]}
            >
                <Input className={style.fields} placeholder="Last Name" name="lastName" onChange={handleChanger} />
            </Form.Item>
            <Form.Item
                name="userName"
                rules={[{ required: true, message: 'Username is required!' }]}
            >
                <Input className={style.fields} placeholder="Username" name="userName" onChange={handleChanger}/>
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Email is required!' }]}
            >
                <Input className={style.fields} placeholder="Email" name="email" onChange={handleChanger}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Password is required!' }]}
            >
                <Input className={style.fields} type="password" placeholder="Password" name="password" onChange={handleChanger}/>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className={style.loginBtn} type="primary">Sign Up</Button>
            </Form.Item>
        </Form>
        {console.log(data)}
        <h4>or</h4>
        <Button className={style.googleAuthBtn} type="primary"><FcGoogle /> <p>Signup with Google</p></Button>
    </div>
}

export default Register;