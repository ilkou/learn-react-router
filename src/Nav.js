import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Nav() {
    const navStyle = {color: 'white', textDecoration: 'none'};

    return (
        <nav className="App">
            <Link to={"/"} style={navStyle}>
                <img src={"https://alexanderfo.com/wp-content/uploads/2019/12/1139px-Cloud-API-Logo.svg_.png"} alt={"logo"} width={"30px"}/>
                <span>Fortnite</span>
            </Link>
            <ul className={"nav-links"}>
                <Link to={"/shop"} style={navStyle}>
                    <li>Shop</li>
                </Link>
                <Link to={"/about"} style={navStyle}>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
