import React from 'react';
import Header from './Header.jsx';
import Band from './Band.jsx';
import Nav from './Nav.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div >
                <Header />
                <Band />
                <Nav />
            </div>
        );
    }
}