import React, { Component } from 'react';
import Background from "../../static/img/banner-bg.jpg";
import mobile from "../../static/img/mobile.png";
import googleplay from "../../static/img/googleplay.png";
import appstore from "../../static/img/appstore.png";

export default class HomeApp extends Component {
    render() {
        return (
            <>
                <section className="app-section pd-7 bg-image" style={{ background: `url(${Background})` }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <figure className="mobile-app">
                                    <img src={mobile} alt="app" />
                                </figure>
                            </div>
                            <div className="col-md-6">
                                <div className="app-content">
                                    <div className="app-header">
                                        <span>Get started with</span>
                                        <h2>Yatramani sewa app</h2>
                                    </div>

                                    <div className="app-footer">
                                        <h4>Download now</h4>
                                        <div className="app-icon">
                                            <figure>
                                                <img src={googleplay} alt="google play" />
                                            </figure>
                                            <figure>
                                                <img src={appstore} alt="ios store" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
