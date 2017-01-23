import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "Places"},
    {element:"Meetups"},
    {element: "Stories"},
    {element: "Podcast"},
    {element: "Guidelines"}
];

export default class Community extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-btn">Community</div>
                <div className="dropdown-content">
                    <CreateMenu menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}