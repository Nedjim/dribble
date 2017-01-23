import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "About"},
    {element:"Shop"},
    {element: "Support"},
    {element: "Buckets"},
    {element: "Colors"},
    {element: "Tags"},
    {element: "Training"},
    {element: "Twitter"},
    {element: "Facebook"},
    {element: "Integrations"}
];

export default class Ect extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-btn">...</div>
                <div className="dropdown-content">
                    <CreateMenu menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}