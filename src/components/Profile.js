import React from "react";
import "./Profile.css";
// import Feed from "./Feed";
import { User } from "@phosphor-icons/react";
import myImage from './profile.jpg';

// Then in your JSX
<img src={myImage} alt="My Profile" />


function Profile(){
    return (
        <React.Fragment>
            <div id="profile-main-container"> 
                <div id="profile-container">
                    <div id="profile-visual">
                        <img id="profile-photo" src={myImage} alt="My Profile" />
                        <div id="profile-icon">
                            <div id="profile-icon-border">
                                <User size={50} color="whitesmoke" bgcolor="blue"/>
                            </div>
                        </div>
                        <p id="display-name">Name Here</p>
                        <div id="profile-nav">
                            <a href="google.com">Tweets</a>
                            <a href="google.com">Following</a>
                            <a href="google.com">Followers</a>
                        </div>
                    </div>

                    <div id="profile-overview">
                        <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.

                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
            <hr/>
            </div>
        </React.Fragment>
    );
}

export default Profile;