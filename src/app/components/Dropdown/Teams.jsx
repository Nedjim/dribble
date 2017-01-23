import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "All"},
    {element:"Hiring designers"},
    {element: "Design Teams for Hire"},
    {element: "Add Your Design Team"}
];

export default class Teams extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-btn">Teams</div>
                <div className="dropdown-content">
                    <CreateMenu menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}