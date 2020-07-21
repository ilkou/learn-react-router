import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Nav() {
    const navStyle = {color: 'white', textDecoration: 'none'};

    return (
        <nav className="App">
            <Link to={"/"} style={navStyle}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Cloud-API-Logo.svg/1139px-Cloud-API-Logo.svg.png"} alt={"logo"} width={"30px"}/>
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
