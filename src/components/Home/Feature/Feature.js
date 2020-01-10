import React, { Component } from 'react';
import FeatureJson from './FeatureJson';
import FeatureCard from './FeatureCard';


export default class Feature extends Component {
    render() {
        return (
            <>
                <section className="feature-section pd-7">
                    <div className="container">
                        <div className="ysewa-title">
                            <h3>why book with us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, nostrud exercitation.</p>
                        </div>
                        <div className="row">
                        {FeatureJson.map((e)=>{
                           return <FeatureCard  featureImg = {e.featureImg}  featureTitle={e.featureTitle} featureDsc={e.featureDsc}/>
                        })}
                        </div>
                    </div>

                </section>
            </>
        )
    }
}
