import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header class="full-width">
                            <div className="dropdown">
                                <div className="dropdown-btn">Shots</div>
                                <div className="dropdown-content">
                                    <a href="#">Popular</a>
                                    <a href="#">Recent</a>
                                    <a href="#">Debuts</a>
                                    <a href="#">Teams</a>
                                    <a href="#">Debuts</a>
                                    <a href="#">Playoffs</a>
                                    <a href="#">Hightlights</a>
                                    <a href="#">Projects</a>
                                    <a href="#">Goods by Designers</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <div className="dropdown-Btn">Designers</div>
                                <div className="dropdown-content">
                                    <a href="#">All</a>
                                    <a href="#">For hire</a>
                                    <a href="#">Community</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <div className="dropdown-Btn">Teams</div>
                                <div className="dropdown-content">
                                    <a href="#">All</a>
                                    <a href="#">Hiring designers</a>
                                    <a href="#">Design Teams for Hire</a>
                                    <a href="#">Add Your Design Team</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <div className="dropdown-Btn">Community</div>
                                <div className="dropdown-content">
                                    <a href="#">Places</a>
                                    <a href="#">Meetups</a>
                                    <a href="#">Stories</a>
                                    <a href="#">Podcast</a>
                                    <a href="#">Guidelines</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <div className="dropdown-Btn">Jobs</div>
                                <div className="dropdown-content">
                                    <a href="#">All</a>
                                    <a href="#">Remote / Anywhere</a>
                                    <a href="#">Teams Hiring</a>
                                    <a href="#">Post a Job</a>
                                </div>
                            </div>

                            <div className="dropdown">
                                <div className="dropdown-Btn">...</div>
                                <div className="dropdown-content">
                                    <a href="#">About</a>
                                    <a href="#">Shop</a>
                                    <a href="#">Support</a>
                                    <a href="#">Buckets</a>
                                    <a href="#">Colors</a>
                                    <a href="#">Tags</a>
                                    <a href="#">Training</a>
                                    <a href="#">Twitter</a>
                                    <a href="#">Facebook</a>
                                    <a href="#">Integrations</a>
                                </div>
                            </div>

            </header>
        );
    }
}