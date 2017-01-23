import React from 'react';
import Menu from './Menu.jsx';
import Login from './Login.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <img id="logo" src="../../img/dribbble.png" className="inline-block"/>
                <div id="menu" className="inline-block absolute">
                    <Menu />
                </div>
                <div id="sign" className="login inline-block ">
                    <Login />
                </div>
            </header>
        );
    }
}