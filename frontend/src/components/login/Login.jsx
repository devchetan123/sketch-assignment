import React from "react";
import style from "./login.module.css"
import { Input,Button } from "antd"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    return <div className={style.loginContainer} >
        <h1>Login</h1>
        <Input className={style.fields} placeholder="Email" />
        <Input className={style.fields} type="password" placeholder="Password" />
        <p>Forgot password?</p>
        <Button className={style.loginBtn} type="primary">Login</Button>
        <div className={style.signUpTextBox} >
            <p>Don't have an account?</p>
            <p onClick={() => navigate("/register")} >Sign up</p>
        </div>
        <h4>or</h4>
        <Button className={style.googleAuthBtn} type="primary"><FcGoogle style={{  }} /> <p>Login with Google</p></Button>
    </div>
}

export default Login;