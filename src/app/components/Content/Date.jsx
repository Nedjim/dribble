import React from 'react';

export default class Date extends React.Component {
    render() {
        //console.log(this.props.date);
        var date = Date(this.props.date);
        console.log(date);
        return (
            <div >
            </div>
        );
    }
}