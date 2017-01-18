import React from 'react';

export default class HeaderSign extends React.Component {
    render() {
        return (
            <div>
                <span className="sign">
                    <a>Sign up</a>
                </span>
                <span className="sign">
                    <a>Sign in</a>
                </span>
                <div>
                    <img src="../../img/search.png" class="search-icone" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        );
    }
}