import React from 'react';

export default class CreateElement extends React.Component {
    render() {
        return (
            <div >
            <div className="box">
                    <p className="title">{this.props.title}</p>
                    <p className="views">{this.props.viewsCount}</p>
                    <p className="comments">{this.props.commentsCount}</p>
                    <p className="likes">{this.props.likesCount}</p>
                    {/*<p>{this.props.description}</p>*/}
                    {/*<p>{this.props.date}</p>*/}
                </div>
                <img src={this.props.image}/>
            </div>
        );
    }
}