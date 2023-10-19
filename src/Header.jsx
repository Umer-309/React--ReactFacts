import React from "react";

function Header(props) {
    return (
            <nav className={props.darkMode ? "header": "header dark"}>
                <img src="./public/reactjs-icon.png" alt="" />
                <h3 className="header--title">ReactFacts</h3>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--div"
                    onClick={props.toggle}>
                        <div className="toggler--div-circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
    )
}

export default Header