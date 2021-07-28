import React, {Component} from 'react';
import "./header.css";
import { BrowserRouter as Router, } from "react-router-dom";
import "./header.css";
import Menu from "./menu-bar-item/Menu-bar";
import Logo from "./menu-bar-item/logo-bar";
import IconNav from "./menu-bar-item/Icon_navbar";
import MobileMenu from "./Mobile.menu";
import Icon_svg from "../../Data/Icon.svg";
class Header extends Component {


    render() {
        return (
                <Router>
                    <div className="header-area">
                        <div className="top-header">
                            <div className="offer text-center">
                                <p>
                                    New Offer of this weekend only get <span className="text-danger">50%</span> flat
                                </p>
                            </div>
                        </div>
                        <div className="menu-area">
                            <div className="container menu desktop-nav">
                                <nav className="d-flex align-items-center justify-content-between ">
                                    <Logo/>
                                    <Menu/>
                                    <IconNav/>
                                </nav>
                            </div>
                            <div className="mobile-bar container">
                                <nav className="d-flex align-items-center justify-content-between ">
                                    <Logo/>
                                    <IconNav/>
                                    <div className="bar">
                                        <img src={Icon_svg.menu} alt="" className={'icon sidebarBtn'} />
                                    </div>
                                </nav>
                            </div>
                            <MobileMenu className="d-sm-block d-md-none d-lg-none d-xl-none"/>
                        </div>
                    </div>
                </Router>
        );
    }
}

export default Header;






