import React from "react";
import "./Header.css";

function Header(){
    return (
        <React.Fragment>
            <div id="header">
                <div id="nav">
                    <a href="google.com">Home</a>
                    <a href="google.com">Notifications</a>
                    <a href="google.com">messages</a>
                </div>

                <div id="text-boxes">
                    <input id="search" type="text" placeholder="Search" />
                    <input id="tweet"  type="text" placeholder="Tweet" />
                </div>
            </div>
            <hr/>
        </React.Fragment>
    );
}

export default Header;