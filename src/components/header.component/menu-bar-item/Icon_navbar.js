import React from 'react';
import {Link} from "react-router-dom";
import Icon_svg from "../../../Data/Icon.svg";

const IconNav = () => {
    return (
        <div>
            <div className="right-nav d-flex align-item-center">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link ">
                            <img src={Icon_svg.user} alt="user" className="icon" />

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link position-relative">
                            <img src={Icon_svg.heart} alt="like" className="icon" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
99+
</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link position-relative">
                            <img src={Icon_svg.shopping} alt="" className="icon" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-warning text-light">
99+
</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default IconNav;
