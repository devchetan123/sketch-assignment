import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { registerAPI } from "../../services/auth.services";
import ModalPopUp from "../notifications/Modal";
import style from "./register.module.css"
import { Result } from 'antd';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
 
const initialData = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
}

const Register = () => {

    const navigate = useNavigate();

    // Modal handling //

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const [data, setData] = useState(initialData);
    const [msg, setMsg] = useState("");
    const [status, setStatus] = useState(false)

    const isAuth = useSelector(state => state.isAuth.isAuth)

    const handleChanger = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const formSubmitHandler = () => {
        const payload = data
        registerAPI(payload).then(res => {
            showModal()
            setStatus(res.data.status)
            setMsg(res.data.message)
        })
        // console.log(payload)
    }

    const Success = () => {

        let title = status ? "SignUp Success" : "Failed"
        let result = status ? "success" : "error"

        return <Result
            status={result}
            title={title}
            subTitle={msg}
        />
    }

    useEffect(() => {
        if(isAuth){
            navigate("/")
        }
    }, [isAuth])

    return <>
        <ModalPopUp MainComponent={Success} showModal={showModal} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} btnText={"Login"} NavigateUrl={"/login"} />
        <div className={style.loginContainer} >
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
                    <Input className={style.fields} placeholder="Username" name="userName" onChange={handleChanger} />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Email is required!' }]}
                >
                    <Input className={style.fields} type="email" placeholder="Email" name="email" onChange={handleChanger} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Password is required!' }]}
                >
                    <Input className={style.fields} type="password" placeholder="Password" name="password" onChange={handleChanger} />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" className={style.loginBtn} type="primary">Sign Up</Button>
                </Form.Item>
            </Form>
            <div className={style.accountalready} >
                <p>Already have an account?</p>
                <p onClick={() => navigate("/login")} >Login</p>
            </div>
            <h4>or</h4>
            <Button className={style.googleAuthBtn} type="primary"><FcGoogle /> <p>Signup with Google</p></Button>
        </div>
    </>
}

export default Register;