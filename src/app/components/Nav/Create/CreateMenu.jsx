import _ from 'lodash';
import React from 'react';
import CreateElement from './CreateElement.jsx';

export default class CreateMenu extends React.Component{
    renderMenu(){
        return _.map(this.props.menu, (e,index) => <CreateElement key={index} {...e}/>);
    }

    render(){
        return (
           <div>
               {this.renderMenu()}
           </div>
        );
    }
}