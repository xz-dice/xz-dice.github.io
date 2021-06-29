import React from "react";
import {Link} from "react-router-dom";

const NavigationBar = () => {

    return (
            <div className="nav-home">
                <div>
                        <h1 className="nav-title">
                            <Link to="/">XANDICE ARMAH</Link>
                        </h1>
                    </div>
                    <div className="nav-links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
            </div>
    )
}

export default NavigationBar