import React from 'react';


export default class Dribbble extends React.Component {
    render() {
        return (
            <div id="list" className="inline-block absolute">
                <table>
                    <tbody>
                        <tr>
                            <td>About</td>
                            <td>Guidelines</td>
                            <td>Brand</td>
                        </tr>
                        <tr>
                            <td>Help</td>
                            <td>Privacy</td>
                            <td>Advertise</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>Shop</td>
                            <td>API</td>
                        </tr>
                        <tr>
                            <td>Terms</td>
                            <td>Testimonials</td>
                            <td>Intergrations</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}