import React, { Component } from 'react'

export default class TestCard extends Component {
    render() {
        return (
            <div className="testi-wrapper">
                <div className="testi-item">
                    <figure style={{ background: `url(${this.props.testImg})` }}>
                    </figure>
                    <p>{this.props.testdsc}</p>
                    <div className="testi-footer">
                        <h5>{this.props.testAuthor}</h5>
                        <h6>{this.props.testPost}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
