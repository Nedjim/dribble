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
                <div id="social-network" className="inline-block">
                    <img src="../../img/dribbble-icon.png" alt="dribble"/>
                    <img src="../../img/twitter.png" alt="twitter"/>
                    <img src="../../img/fbk.png" alt="facebook"/>
                    <img src="../../img/instagram.png" alt="instagram"/>
                </div>
                <div id="contact" className="inline-block absolute">
                    <img src="../../img/dribbble-ball.png" className="inline-block"/>
                    <div className="inline-block absolute">
                        <p>662,298,206,839</p>
                        <p>pixels dribbbled</p>
                    </div>
                </div>
            </footer>
        );
    }
}