import Header from "./Header";
import './App.css';
import React from 'react';
import FeedList from "./FeedList";
import Profile from "./Profile";
import SideLinksList from "./SideLinksList";

function App() {
    return (
        <React.Fragment>
            <Header />
            <div id="main-container">
                <Profile />
                <FeedList />
                <SideLinksList />
            </div>
        </React.Fragment>
    );
}

export default App;
