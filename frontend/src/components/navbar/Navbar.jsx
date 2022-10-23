import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/images/nayalogo.png"
import { getValue } from "../../utils/localStorage";
import style from "./navbar.module.css"
import ProfileTab from "./ProfileTab";
import { useSelector } from "react-redux"

const Navbar = () => {

    const [userData, setUserData] = useState({})
    const isAuth = useSelector(state => state.isAuth.isAuth)

    useEffect(() => {
        if(isAuth){
            const data = getValue("payload")
            setUserData(data.user)
        }
    }, [isAuth])

    return <div className={style.navbarContainer}>
        <img src={logo} alt="logo" height={"80px"} />
       {isAuth && <div className={style.profileBar} >
            <p>{userData.userName}</p>
            <ProfileTab />
        </div>}
    </div>
}

export default Navbar