import React from 'react';
import HeaderMenu from './HeaderMenu.jsx';
import HeaderSign from './HeaderSign.jsx';
import Nav from './Nav.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img id="logo" src="../../img/dribbble.png" className="inline-block"/>
                    <div id="menu" className="inline-block absolute">
                        <HeaderMenu />
                    </div>
                    <div id="sign" className="login inline-block ">
                        <HeaderSign />
                    </div>
                </header>
                <Nav />
            </div>
        );
    }
}