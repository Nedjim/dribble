import React from 'react';
import ElementsMenu from './ElementsMenu.jsx';
import Shots from '../Nav/Shots.jsx';
import Designers from '../Nav/Designers.jsx';
import Teams from '../Nav/Teams.jsx';
import Community from '../Nav/Community.jsx';
import Jobs from '../Nav/Jobs.jsx';
import Ect from '../Nav/Ect.jsx';

export default class HeaderMenu extends React.Component {

    render() {
        return (
            <div>
                <Shots />
                <Designers />
                <Teams />
                <Community />
                <Jobs />
                <Ect />
            </div>
        );
    }
}