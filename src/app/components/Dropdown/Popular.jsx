import React from 'react';
import CreateMenu from './Create/CreateMenu.jsx'

const menu = [
    {element: "Recent"},
    {element:"Most viewed"},
    {element: "Most commented"}
];

export default class Popular extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menu
        }
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-btn">Popular</div>
                <div className="dropdown-content">
                    <CreateMenu menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}