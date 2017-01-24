import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

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
        var body = _.map(this.state.body, (element)=>{
            return (
                <div key={element.id}>
                    <p>{element.title}</p>
                    <p>{element.views_count}</p>
                    <p>{element.comments_count}</p>
                    <p>{element.likes_count}</p>
                    {/*<p>{element.description}</p>*/}
                    <p>{element.updated_at}</p>
                </div>
                );
        });
        return (
            <div>
            {body}
            </div>
        );
    }
}
