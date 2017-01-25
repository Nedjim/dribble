import React from 'react';
import Date from './Date.jsx';
import Description from './Description.jsx';

export default class CreateElement extends React.Component {
    render() {
        return (
            <div >
                <div className="box">
                    <p className="title">{this.props.title}</p>
                    <Description description={this.props.description}/>
                    <Date date={this.props.date}/>
                </div>
                <img src={this.props.image}/>
                <div className="count">
                    <img src="../../img/eye.png" alt="" />
                    <p className="views">{this.props.viewsCount}</p>
                    <img src="../../img/chat.png" alt="" />
                    <p className="comments">{this.props.commentsCount}</p>
                    <img src="../../img/favorite.png" alt="" />
                    <p className="likes">{this.props.likesCount}</p>
                </div>
            </div>
        );
    }
}