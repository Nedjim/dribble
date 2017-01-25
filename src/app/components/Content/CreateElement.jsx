import React from 'react';
import Date from './Date.jsx';

export default class CreateElement extends React.Component {
    render() {
        return (
            <div >
                <div className="box">
                    <p className="title">{this.props.title}</p>
                    {/*<p>{this.props.description}</p>*/}
                    <Date date={this.props.date}/>
                </div>
                <img src={this.props.image}/>
                <div className="count">
                    <p className="views">{this.props.viewsCount}</p>
                    <p className="comments">{this.props.commentsCount}</p>
                    <p className="likes">{this.props.likesCount}</p>
                </div>
            </div>
        );
    }
}