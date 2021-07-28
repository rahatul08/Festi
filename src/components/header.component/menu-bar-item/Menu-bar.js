import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Router_data from "../../../Data/Router.data";

class Menu extends Component {
    constructor() {
        super();
        this.state={
            menu:Router_data
        }
    }
    render() {
        return (
            <div>
                <div className="d-flex align-item-center nav-area">
                    <ul className="nav">
                        {
                            this.state.menu.map(item=>(
                                <li className="nav-item" key={item.id}>
                                    <Link className="nav-link" to={item.route_name}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
