import React from "react";
import PropTypes from "prop-types";
import './SideLinks.css';

function SideLink(props){
    return (
        <div className="sidelinks-item">
            <div className="user-icon" style={{ backgroundColor: props.bgColor }}>
                {props.icon}
            </div>
            <div className="side-content">
                <p className="side-name">{props.name}</p>
                <button className="friend-button">Add Friend</button>
            </div>    
        </div>
    );
}


SideLink.propTypes = {
    name: PropTypes.string
};

export default SideLink;