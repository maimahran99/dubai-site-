import React from "react";
import { useState } from "react";
import "./header.css"
import Navbar from "./navbar";
import Logo from "./logo";

function Header () {
    const [toggle , settoggle] = useState(false)
    return (
        <header className="header" >
            <Logo />
        <Navbar toggle={toggle} setToggle={settoggle} />

        <div onClick={() => settoggle(prev => !prev)} className="header-menu">
            {toggle ? <i className="bi bi-x-lg" ></i> : <i className="bi bi-list" ></i> }
        </div>
        </header> 
    )
}
export default Header;