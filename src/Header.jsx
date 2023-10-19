import React from "react";

function Header() {
    return (
            <nav className="header">
                <img src="./public/reactjs-icon.png" alt="" />
                <h3 className="header--title">ReactFacts</h3>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--div">
                        <div className="toggler--div-circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
    )
}

export default Header