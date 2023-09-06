import React from "react";
import Ticket from "./Feed";
import './Feed.css';
import { User } from "@phosphor-icons/react";


const mainFeedList = [
    {
        name: 'Thato',
        message: 'This is a message.',
        color: 'red',
        bgColor: 'lightgrey'
    },
    {
        name: 'Sleater',
        message: 'My message will be in this feed.',
        color: 'blue',
        bgColor: 'lightblue'
    },
    {
        name: 'Imani',
        message: 'WTF is this.',
        color: 'green',
        bgColor: 'lightgreen'
    }
];


function FeedList(){
    return (
        <React.Fragment>
            <div id="feed-main-container">
                <div id="update-feed-entry">
                    <input id="feed-input" placeholder="What's Happening?"></input>
                </div>
            

                {mainFeedList.map((feed, index) =>
                    <Ticket 
                        name={feed.name}
                        message={feed.message}
                        key={index}
                        icon={<User size={32} color={feed.color} />}
                        bgColor={feed.bgColor}
                    />
                )}

            </div>
        </React.Fragment>
    );
}

export default FeedList;