import React from 'react';
import Dribbble from './Dribbble.jsx';
import List from './List.jsx';
import Jobs from './Jobs.jsx';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Dribbble />
                <List />
                <Jobs />
                <p id="copyright">Copyright © 2009–2017 Dribbble LLC. All screenshots © their respective owners. Shipped from Salem, Mass. USA.</p>
            </footer>
        );
    }
}