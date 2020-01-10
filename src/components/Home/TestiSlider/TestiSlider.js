import React, { Component } from 'react';
import Slider from "react-slick";
import Test from "./Test";

import testi from "../../../static/img/pf.jpg";
import TestCard from './TestCard';


class TestiSlider extends Component {
    

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
            ]
            // fade: true,
        };

        

        return (
            <section className="testi-section pd-7">
                <div className="container">
                    <div className="ysewa-title">
                        <h3>What People say</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, nostrud exercitation.</p>
                    </div>

                    <div className="testi-slider">
                        <Slider {...settings}>
                            {Test.map((e)=>{
                                return <TestCard testDsc={e.testDsc} testAuthor={e.testAuthor} testPost={e.testPost} testImg={e.testImg}/>
                            })}
                        </Slider>
                    </div>

                </div>
            </section>
        )
    }
}
export default TestiSlider;
