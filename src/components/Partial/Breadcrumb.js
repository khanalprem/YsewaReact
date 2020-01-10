import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Breadcrumb extends Component {
    render() {
        return (
            <div className="ysewa-breadcrumb filter-form">
                <div className="container-fluid">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Booking</li>
                    </ul>
                </div>
            </div>
        )
    }
}
