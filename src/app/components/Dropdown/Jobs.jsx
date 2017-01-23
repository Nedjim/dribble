import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "All"},
    {element:"Remote / Anywhere"},
    {element: "Teams Hiring"},
    {element: "Post a Job"}
];

export default class Jobs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-btn">Jobs</div>
                <div className="dropdown-content">
                    <CreateMenu menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}