import React, { Component } from 'react'

export default class OverviewFilter extends Component {
    render() {
        return (
            <>
                <div className="filter-form dashboard-filter">
                        <form>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group mr-0">
                                        <label>Bus number</label>
                                        <input type="text" placeholder="Ex:1934" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group mr-0">
                                        <label>To</label>
                                        <input type="text" placeholder="Drop off address"
                                            className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group mr-0">
                                        <label>select Date</label>
                                        <div className="input-group mr-0">
                                            <input type="text" placeholder="Select Date" id="nepaliDateD"
                                                className="form-control nepali-calendar" />
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i>calendar_today</i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group radio-group">
                                        <label>Travel</label>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="day" name="day"
                                                className="custom-control-input" />
                                            <label className="custom-control-label" for="day">Day</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="night" name="day"
                                                className="custom-control-input" />
                                            <label className="custom-control-label" for="night">Night</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </>
        )
    }
}
