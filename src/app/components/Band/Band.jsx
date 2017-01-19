import React from 'react';

export default class Band extends React.Component {
    render() {
        return (
            <div id="nav">
                <p className="inline-block"><span className="white">What are you working on? </span><span className="grey">Dribbble is show and tell for designers.   </span></p>
                <div className="button inline-block greyB">
                    <a href="#"> Learn more </a>
                </div>
                <div className="button inline-block pink">
                    <a href="#"> Sign up </a>
                </div>
            </div>
        );
    }
}