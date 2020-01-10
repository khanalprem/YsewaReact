import React, { Component } from 'react';

export default class CounterCard extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="counter-item">
                    <b>{this.props.countTitle}</b>
                    <h4>{this.props.countNumber}</h4>
                    <p>{this.props.countDsc}</p>
                </div>
            </div>
        )
    }
}
