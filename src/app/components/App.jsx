import React from 'react';
import Header from './Header/Header.jsx';
import Band from './Band/Band.jsx';
import Sort from './Sort/Sort.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div >
                <Header />
                <Band />
                <Sort />
            </div>
        );
    }
}