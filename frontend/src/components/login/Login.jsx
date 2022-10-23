import React, { useState } from "react";
import style from "./login.module.css"
import { Input, Button, Result, Form } from "antd"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/auth.services";
import ModalPopUp from "../notifications/Modal";
import { setValue } from "../../utils/localStorage";
import { useSelector, useDispatch } from "react-redux"
import { login } from "../../redux/auth/auth.slice";
import { useEffect } from "react";


const initialData = {
    email: "",
    password: ""
}

const Login = () => {

    const dispatch = useDispatch()

    // modal handling //

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

    const navigate = useNavigate();

    const handleChanger = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const isAuth = useSelector(state => state.isAuth.isAuth)

    const formSubmitHandler = () => {
        const payload = {
            email: data.email,
            password: data.password
        }
        loginAPI(payload).then(res => {
            if (res.data.status === true) {
                const data = {
                    authToken : res.data.authToken,
                    user : res.data.user
                }
                dispatch(login(data))
                navigate("/")
            }
            else {
                showModal()
                setMsg(res.data.message)
            }
        })
    }

    const Success = () => {
        return <Result
            status="error"
            title={"Failed"}
            subTitle={msg}
        />
    }

    useEffect(() => {
        if(isAuth){
            navigate("/")
        }
    }, [isAuth])

    return <>
        <ModalPopUp MainComponent={Success} showModal={showModal} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} btnText={"SignUp"} NavigateUrl={"/register"} />
        <div className={style.loginContainer} >
            <h1>Login</h1>
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
                    name="email"
                    rules={[{ required: true, message: 'Email is required!' }]}
                >
                    <Input
                        className={style.fields}
                        type="email"
                        name="email"
                        onChange={handleChanger}
                        placeholder="Email"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Password is required!' }]}
                >
                    <Input
                        className={style.fields}
                        type="password"
                        name="password"
                        onChange={handleChanger}
                        placeholder="Password"
                    />
                </Form.Item>
                <p>Forgot password?</p>

                <Form.Item>
                    <Button
                        className={style.loginBtn}
                        htmlType="submit"
                        type="primary">

                        Login
                    </Button>
                </Form.Item>
            </Form>
            <div className={style.signUpTextBox} >
                <p>Don't have an account?</p>
                <p onClick={() => navigate("/register")} >Sign up</p>
            </div>
            <h4>or</h4>
            <Button
                className={style.googleAuthBtn}
                type="primary"><FcGoogle />
                <p> Login with Google</p>
            </Button>
            {console.log(data, "data")}
        </div>
    </>
}

export default Login;