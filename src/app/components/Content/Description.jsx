import React from 'react';

export default class Description extends React.Component {
    render() {
        return (
            <div className="description">
                <p dangerouslySetInnerHTML={{__html: this.props.description}}></p>
            </div>
        );
    }
}