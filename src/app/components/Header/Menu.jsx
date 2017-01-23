import React from 'react';
import Shots from '../Dropdown/Shots.jsx';
import Designers from '../Dropdown/Designers.jsx';
import Teams from '../Dropdown/Teams.jsx';
import Community from '../Dropdown/Community.jsx';
import Jobs from '../Dropdown/Jobs.jsx';
import Ect from '../Dropdown/Ect.jsx';

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