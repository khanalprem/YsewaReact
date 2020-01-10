import React, { Component } from 'react'

class FeatureCard extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="feature-item">
                    <figure>
                        <img src={this.props.featureImg} alt="cheap ticket" />
                    </figure>
                    <div className="feature-content">
                        <h4>{this.props.featureTitle}</h4>
                        <p>{this.props.featureDsc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default FeatureCard
