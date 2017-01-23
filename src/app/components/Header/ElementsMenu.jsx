import _ from 'lodash';
import React from 'react';
import CreateElement from './CreateElement.jsx';

export default class ElementsMenu extends React.Component{
    renderShots(){
        return _.map(this.props.shots, (e,index) => <CreateElement key={index} {...e}/>);
    }

    render(){
        return (
           <div>
               {this.renderShots()}
           </div>
        );
    }
}