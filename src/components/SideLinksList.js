import React from "react";
import SideLink from "./SideLink";
import './SideLinks.css';
import { User } from "@phosphor-icons/react";


const mainSideLinksList = [
    {
        name: 'Emily Johnson',
        color: 'purple',
        bgColor: 'lavender'
    },
    {
        name: 'John Smith',
        color: 'orange',
        bgColor: 'moccasin'
    },
    {
        name: 'Sophia Williams',
        color: 'white',
        bgColor: 'lightpink'
    },
    {
        name: 'Michael Brown',
        color: 'brown',
        bgColor: 'wheat'
    },
    {
        name: 'Olivia Wilson',
        color: 'teal',
        bgColor: 'paleturquoise'
    },
    {
        name: 'William Harris',
        color: 'red',
        bgColor: 'lightgrey'
    },
    {
        name: 'Isabella Clark',
        color: 'blue',
        bgColor: 'lightblue'
    },
    {
        name: 'James Lewis',
        color: 'green',
        bgColor: 'lightgreen'
    }
];

function SideLinksList(){
    return (
        <div id="sidelinks-main-container">
            {mainSideLinksList.map((sidelink, index) =>
                <SideLink 
                    name={sidelink.name}
                    key={index}
                    icon={<User size={32} color={sidelink.color} />}
                    bgColor={sidelink.bgColor}
                />
            )}
        </div>
    );
}


export default SideLinksList;