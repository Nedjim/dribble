import React from 'react';
import Request from 'superagent';
import _ from 'lodash';
import CreateElement from './CreateElement.jsx';

export default class HeaderMenu extends React.Component {

    constructor(){
        super();
        this.state = {}
    }

    search(){
        var url = "https://api.dribbble.com/v1/shots?access_token=36474375a067aa953aa8cf6b9b68278c688ed6be4a75473f575252bfc7b5a1c7";
        Request.get(url).then((data) => {
             this.setState({
                 body: data.body
             });
        });
        }

    render() {
        this.search();
        var contents = _.map(this.state.body, (element)=>{
            return (
                <div key={element.id} className="content inline-block">
                    <CreateElement title={element.title} viewsCount={element.views_count} commentsCount={element.comments_count} likesCount={element.likes_count} description={element.description} date={element.updated_at} image={element.images["teaser"]}/>
                </div>
                );
        });
        return (
            <div id="contents">
                {contents}
            </div>
        );
    }
}
