import React from 'react';
import {Link} from "react-router-dom";
import Data_img from "../../../Data/Data_img";

const Logo = () => {
    return (
        <div>
            <div className="logo-area">
                <Link to="/" className="nav-link">
                    <img src={Data_img.logo} alt="logo" />
                </Link>
            </div>
        </div>
    );
};

export default Logo;
