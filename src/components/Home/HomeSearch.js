import React, { Component } from 'react'

export default class HomeSearch extends Component {
    render() {
        return (
            <>
                <div className="search-form">
                    <div className="container">
                        <div className="filter-form">
                            <div className="container-fluid">
                                <form action="bus-booking-user.html">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-6">
                                            <div className="form-group mr-0">
                                                <label for="input">From</label>
                                                <input type="text" placeholder="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <div className="form-group mr-0">
                                                <label for="input">To</label>
                                                <input type="text" placeholder="" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group mr-0">
                                                <label for="input">select Date</label>
                                                <div className="input-group mr-0">
                                                    <input type="text" placeholder="Select Date" id="nepaliDateD"
                                                        className="form-control nepali-calendar" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"><i className="material-icons">calendar_today</i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group radio-group">
                                                <label>Vehicle</label>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="day" name="day" className="custom-control-input" />
                                                    <label className="custom-control-label" for="day">Bus</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="night" name="day" className="custom-control-input" />
                                                    <label className="custom-control-label" for="night">Micro</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <div className="form-group ">
                                                <button className="ysewa-button border-button mt-4" type="submit">Search
                                            Bus</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
