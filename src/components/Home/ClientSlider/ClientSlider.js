import React, { Component } from 'react';
import Slider from "react-slick";
import client1 from "../../../static/img/client1.png";
import client2 from "../../../static/img/client2.png";
import client3 from "../../../static/img/client3.png";
import client4 from "../../../static/img/client4.png";
import client5 from "../../../static/img/client5.png";
import client6 from "../../../static/img/client6.png";

export default class ClientSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ClientLogo:[client1, client2, client3, client4, client5, client6]
          };
      }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
            ]
            // fade: true,
        };
        return (
            <>
                <section className="client-section">
                    <div className="container">
                        <div className="client-slider">
                            <Slider {...settings}>
                                {this.state.ClientLogo.map((e) => {
                                    return <div className="client-item" >
                                        <figure>
                                            <img src={e} key={e}/>
                                        </figure>
                                    </div>
                                })}
                            </Slider>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
