import React from "react";
import {Link} from "react-router-dom";
import CV from "./Xandice Armah - CV 2021.pdf"
const NavigationBar = () => {

    return (
            <div className="nav-home">
                <div>
                        <h1 className="nav-title">
                            <Link to="/">XANDICE ARMAH</Link>
                        </h1>
                    </div>
                    <div className="nav-links">
                        <li><a href="https://rxresu.me/r/z03MnOG5" target="_blank">Download CV</a></li>
                    </div>
            </div>
    )
}

export default NavigationBar
