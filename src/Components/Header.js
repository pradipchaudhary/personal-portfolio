import React from "react";
import lightLogo from "../images/light.png";
import Logo from "../images/logo.png";

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header_inner">
                    <div className="logo">
                        <a href="#">
                            <img src={lightLogo} alt="" />
                        </a>
                    </div>
                    <div className="menu">
                        <ul className="nav">
                            <li className="current">
                                <a href="#"> Home </a>
                            </li>
                            <li>
                                <a href="#"> About </a>
                            </li>
                            <li>
                                <a href="#"> Service </a>
                            </li>
                            <li>
                                <a href="#"> Portfolio </a>
                            </li>
                            <li>
                                <a href="#"> Service </a>
                            </li>
                            <li>
                                <a href="#"> Contact </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
