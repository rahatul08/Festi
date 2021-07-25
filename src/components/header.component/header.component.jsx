import React from 'react';
import './header.css'
import {BrowserRouter as Router, Link} from "react-router-dom";
import Icon_svg from "../../Data/Icon.svg";
import './header.css';
import Data_img from "../../Data/Data_img";

const Header = () => {
    return (
        <Router>
        <div className="header-area">
            <div className="top-header">
                <div className="offer text-center">
                    <p>New Offer of this weekend only get <span className="text-danger">50%</span> flat</p>
                </div>
            </div>
            <div className="menu-area">
                <div className="container menu">
                    <nav className="d-flex align-items-center justify-content-between">
                        <div className="logo-area">
                            <Link to='/' className="nav-link"><img src={Data_img.logo} alt="logo"/></Link>
                        </div>
                        <div className="d-flex align-item-center nav-area">
                            <ul className="nav">
                                <li className="nav-item"><Link className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link">Pages</Link></li>
                                <li className="nav-item"><Link className="nav-link">Shop</Link></li>
                                <li className="nav-item"><Link className="nav-link">Blog</Link></li>
                                <li className="nav-item"><Link className="nav-link">ContactUs</Link></li>
                            </ul>
                        </div>
                        <div className="right-nav d-flex align-item-center">
                            <ul className="nav">
                                <li className="nav-item"><Link className="nav-link"><img src={Icon_svg.user} alt="user" className="icon"/></Link></li>
                                <li className="nav-item"><Link className="nav-link"><img src={Icon_svg.like} alt="like" className="icon"/></Link></li>
                                <li className="nav-item"><Link className="nav-link"><img src={Icon_svg.carts} alt=""        className="icon"/></Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </Router>
    );
};

export default Header;
