import React from 'react';
import HeaderMenu from './HeaderMenu.jsx';
import HeaderLogin from './HeaderLogin.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <img id="logo" src="../../img/dribbble.png" className="inline-block"/>
                <div id="menu" className="inline-block absolute">
                    <HeaderMenu />
                </div>
                <div id="sign" className="login inline-block ">
                    <HeaderLogin />
                </div>
            </header>
        );
    }
}