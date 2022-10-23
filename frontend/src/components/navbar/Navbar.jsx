import React from "react";
import logo from "../../assets/images/nayalogo.png"
import style from "./navbar.module.css"

const Navbar = () => {
    return <div className={style.navbarContainer}>
        <img src={logo} alt="logo" height={"80px"} />
    </div>
}

export default Navbar