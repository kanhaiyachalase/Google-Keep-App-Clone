import React from "react";
import logo from "./Images/G.jpg"

const Header = () => {

    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" width="70" height="50" />
                <h1>kanhaiya App</h1>
            </div>
        </>
    );
};
export default Header;
