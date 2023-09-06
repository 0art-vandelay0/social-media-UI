import React from "react";
import PropTypes from "prop-types";
import './Feed.css';

function Feed(props){
    return (

        <React.Fragment>
            <div id="feed-item-container">
                <div id="feed-item">
                    <div id="user-icon" style={{ backgroundColor: props.bgColor }}>
                        {props.icon}
                    </div>
                    <div id="text-content">
                        <p id="name"><strong>{props.name}</strong></p>
                        <p id="message">{props.message}</p>
                    </div>    
                </div>
            </div>
        </React.Fragment>
    );
}

Feed.propTypes = {
    names: PropTypes.string,
    issue: PropTypes.string
};

export default Feed;