import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "Debuts"},
    {element:"Teams Shots"},
    {element: "Playoffs"},
    {element: "Rebounds"},
    {element: "Animated GIFs"},
    {element: "Shots with attachements"}
];

export default class ShortsSort extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-btn">Shots</div>
                <div className="dropdown-content">
                    <CreateMenu menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}