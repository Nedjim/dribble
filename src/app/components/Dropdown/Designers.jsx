import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "All"},
    {element:"For hire"},
    {element: "Community"},
];

export default class Designers extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                    <div className="dropdown-btn">Designers</div>
                    <div className="dropdown-content">
                         <CreateMenu menu={this.state.menu}/>
                    </div>
                </div>
        );
    }
}