import React, {Component} from 'react';
import $ from "jquery";
import Menu from "./menu-bar-item/Menu-bar";
import Logo from "./menu-bar-item/logo-bar";
import Icon_svg from "../../Data/Icon.svg";

class MobileMenu extends Component {
    componentDidMount() {
        $('.sidebarBtn').click(function(){
            $('.sidebar').toggleClass('active');
            $('.sidebarBtn').toggleClass('toggle');
        });

    }
    render() {
        return (
            <div className="sidebar">
                <div className="container menu">
                    <div className="d-flex align-items-center justify-content-between">
                        <Logo/>
                        <Menu/>
                    </div>
                </div>


             <div className="close">
                 <img src={Icon_svg.cancel} alt="" className="icon sidebarBtn"/>
             </div>
            </div>
        );
    }
}

export default MobileMenu;
