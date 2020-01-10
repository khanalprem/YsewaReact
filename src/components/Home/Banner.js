import React, { Component } from 'react'
import bannerImg from '../../static/img/banner-bus.png';
import Background from "../../static/img/banner-bg.jpg";
import miniVan from '../../static/img/mini-van.png';
import van from '../../static/img/van.png';

export default class Banner extends Component {
    render() {
        return (
            <>
                <section className="banner bg-image" style={{ background: `url(${Background})` }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="banner-content">
                            <h1>We are assist anytime anywhere To Deliver</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, nostrud exercitation.</p>
                        </div>
                    </div>
                    <div className="bus">
                        <img src={bannerImg} alt="ysewa-bus" />
                    </div>

                    <div className="road">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                    id="Layer_1" x="0px" y="0px" viewBox="0 0 1920 70" xmlSpace="preserve">
                    <g>
                        <rect x="1.1" className="st0" width="1920" height="70"></rect>
                        <g>
                            <g>
                                <line className="st74" x1="1920" y1="35" x2="1912" y2="35"></line>
                                <line className="st75" x1="1920" y1="35" x2="11.9" y2="35"></line>
                                <line className="st74" x1="6" y1="35" x2="0" y2="35"></line>
                            </g>
                        </g>
                        <g>
                            <g>
                                <line className="st74" x1="1920" y1="35" x2="1912" y2="35"></line>
                                <line className="st76" x1="1920" y1="35" x2="1912" y2="35"></line>
                                <line className="st74" x1="7" y1="35" x2="1" y2="35"></line>
                            </g>
                        </g>
                    </g>
                </svg>
                        <span className="taxi mini-van">
                            <img src={miniVan} alt="mini-van bus" />
                        </span>
                        <span className="taxi van">
                            <img src={van} alt="van bus" />
                        </span>
                    </div>
                </section>
            </>
        )
    }
}
