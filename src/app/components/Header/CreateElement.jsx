import React from 'react';

export default class CreateElement extends React.Component{

    render(){
        return (
           <a  href="#">{this.props.element}</a>
        );
    }
}