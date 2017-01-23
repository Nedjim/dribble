import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "Popular"},
    {element:"Recent"},
    {element: "Debuts"},
    {element: "Teams"},
    {element: "Playoffs"},
    {element: "Hightlights"},
    {element: "Projects"},
    {element: "Good for designers"}
];

export default class Shots extends React.Component {

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