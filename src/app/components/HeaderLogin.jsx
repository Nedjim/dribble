import React from 'react';

export default class HeaderLogin extends React.Component {
    render() {
        return (
            <div>
                <span className="sign">
                    <a>Sign up</a>
                </span>
                <span className="sign">
                    <a>Sign in</a>
                </span>
                <input type="text" placeholder="Search" />
            </div>
        );
    }
}