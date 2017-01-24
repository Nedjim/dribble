import React from 'react';
import Popular from '../Dropdown/Popular.jsx';
import ShotsSort from '../Dropdown/ShotsSort.jsx';
import Now from '../Dropdown/Now.jsx';

export default class Sort extends React.Component {
    render() {
        return (
            <div id="sort">
                <Popular />
                <ShotsSort />
                <Now />
            </div>
        );
    }
}