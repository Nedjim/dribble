import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "This Past Week"},
    {element:"This Past Mounth"},
    {element: "This Past Year"},
    {element: "All Time"}
];

export default class Now extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-btn">Now</div>
                <div className="dropdown-content">
                    <CreateMenu menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}