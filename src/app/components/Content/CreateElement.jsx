import React from 'react';

export default class CreateElement extends React.Component {
    render() {
        return (
            <div >
                <span>{this.props.title}</span>
                <img src={this.props.image}/>
                <span>{this.props.viewsCount}</span>
                <span>{this.props.commentsCount}</span>
                <span>{this.props.likesCount}</span>
                {/*<p>{this.props.description}</p>*/}
                {/*<p>{this.props.date}</p>*/}
            </div>
        );
    }
}