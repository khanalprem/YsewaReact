import React, { Component } from 'react'

export default class BookingTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
                <div className="table-responsive">
                    <table className="ysewa-table  counter-table table">
                        <thead>
                            <tr>
                                <th>Bus no</th>
                                <th>to</th>
                                <th>bus type</th>
                                <th>booked seat</th>
                                <th width="20%">status</th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr className="default">
                                    <td>
                                        <a href="booking.html" className="businfo-td flex-start">
                                            <h6><span>Ba 1 Kha</span>1970</h6>
                                        </a>
                                    </td>
                                    <td>
                                        <div className="location">
                                            <strong>KTM</strong>
                                            <time>07:00 AM</time>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="bus-type">AC</span>
                                    </td>
                                    <td>
                                        <span className="total-seat">18</span>
                                    </td>
                                    <td>
                                        <a href="manage-seat.html" className="green status">booking</a>
                                    </td>
                                    <td>
                                        <div className="table-action">
                                            <a href="#" className="more-action">
                                                <i className="material-icons">more_vert</i>
                                            </a>
                                            <ul className="dropdown-animation">
                                                <li>
                                                    <a href="#" className="flex-start">
                                                        <i className="material-icons">edit</i> Edit
                                                                </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex-start">
                                                        <i className="material-icons">delete</i>delete
                                                                </a>

                                                </li>
                                                <li>
                                                    <a href="#" className="flex-start">
                                                        <i
                                                            className="material-icons">settings_applications</i>Manage
                                                seat
                                                                </a>

                                                </li>
                                            </ul>
                                        </div>
                                    </td>

                                </tr>
                                <tr className="toggle-row">
                                    <td colspan="6">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="bus-inner">
                                                    <div className="cockpit">
                                                        <ol className="cabin fuselage">
                                                            <li className="seat-row row--1">
                                                                <ol className="seats" type="A">
                                                                    <li className="seat">
                                                                        <input type="checkbox" id="CA1" />
                                                                        <label for="CA1">CA</label>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li className="seat-row row--2">
                                                                <ol className="seats" type="A">
                                                                    <li className="seat">
                                                                        <input type="checkbox" id="CB" />
                                                                        <label for="CB">CB</label>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li className="seat-row row--3">
                                                                <ol className="seats" type="A">
                                                                    <li className="seat ">
                                                                        <input type="checkbox" id="CC" />
                                                                        <label for="CC">CC</label>
                                                                    </li>
                                                                    <li className="seat">
                                                                        <input type="checkbox" id="CD" />
                                                                        <label for="CD">CD</label>
                                                                    </li>
                                                                    <li className="seat">
                                                                        <input type="checkbox" id="CE" />
                                                                        <label for="CE">CE</label>
                                                                    </li>
                                                                    <li className="seat">
                                                                        <input type="checkbox" id="CF" />
                                                                        <label for="CF">CF</label>
                                                                    </li>
                                                                    <li className="seat">
                                                                        <input type="checkbox" id="CG" />
                                                                        <label for="CG">CG</label>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div className="exit exit--front fuselage">

                                                    </div>
                                                    <ol className="cabin fuselage">
                                                        <li className="seat-row row--1">
                                                            <ol className="seats" type="A">
                                                                <li className="seat ">
                                                                    <input type="checkbox" id="A1" />
                                                                    <label for="A1"
                                                                        className="booked-seat">A1</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A2" />
                                                                    <label for="A2">A2</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="B1" />
                                                                    <label for="B1">B1</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="B2" />
                                                                    <label for="B2"
                                                                        className="preserved-seat">B2</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li className="seat-row row--2">
                                                            <ol className="seats" type="A">
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A3" />
                                                                    <label for="A3">A3</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A4" />
                                                                    <label for="A4">A4</label>
                                                                </li>

                                                                <li className="seat">
                                                                    <input type="checkbox" id="B3" />
                                                                    <label for="B3">B3</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="B4" />
                                                                    <label for="B4"
                                                                        className="cancel-seat">B4</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li className="seat-row row--3">
                                                            <ol className="seats" type="A">
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A5" />
                                                                    <label for="A5">A5</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A6" />
                                                                    <label for="A6">A6</label>
                                                                </li>

                                                                <li className="seat">
                                                                    <input type="checkbox" id="B5" />
                                                                    <label for="B5"
                                                                        className="preserved-seat">B5</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="B6" />
                                                                    <label for="B6">B6</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li className="seat-row row--4">
                                                            <ol className="seats" type="A">
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A7" />
                                                                    <label for="A7"
                                                                        className="booked-seat">A7</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A8" />
                                                                    <label for="A8">A8</label>
                                                                </li>

                                                                <li className="seat">
                                                                    <input type="checkbox" id="B7" />
                                                                    <label for="B7"
                                                                        className="booked-seat">B7</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="B8" />
                                                                    <label for="B8">B8</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li className="seat-row row--5">
                                                            <ol className="seats" type="A">
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A9" />
                                                                    <label for="A9">A9</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A10" />
                                                                    <label for="A10">A10</label>
                                                                </li>

                                                                <li className="seat">
                                                                    <input type="checkbox" id="B9" />
                                                                    <label for="B9"
                                                                        className="booked-seat">B9</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="B10" />
                                                                    <label for="B10">B10</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li className="seat-row row--6">
                                                            <ol className="seats" type="A">
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A11" />
                                                                    <label for="A11">A11</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="A12" />
                                                                    <label for="A12">A12</label>
                                                                </li>

                                                                <li className="seat">
                                                                    <input type="checkbox" id="B11" />
                                                                    <label for="B11">B11</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="B12" />
                                                                    <label for="B12">B12</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li className="seat-row row--7">
                                                            <ol className="seats" type="A">
                                                                <li className="seat">
                                                                    <input type="checkbox" id="13" />
                                                                    <label for="13">13</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="14" />
                                                                    <label for="14">14</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="15" />
                                                                    <label for="15">15</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="16" />
                                                                    <label for="16">16</label>
                                                                </li>
                                                                <li className="seat">
                                                                    <input type="checkbox" id="17" />
                                                                    <label for="17">17</label>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </div>

                                                <div className="select-seat-list my-4">
                                                    <h5 className="yswea-counter-title">Selected seat</h5>
                                                    <ul className="seat-price-list flex-start">
                                                        <li>
                                                            <b>A1</b>
                                                            <span>Rs.800</span>
                                                        </li>
                                                        <li>
                                                            <b>A2</b>
                                                            <span>Rs.800</span>
                                                        </li>
                                                        <li>
                                                            <b>CA</b>
                                                            <span>Rs.600</span>
                                                        </li>
                                                        <li>
                                                            <b>CB</b>
                                                            <span>Rs.500</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="total-amount">
                                                    <h5 className="yswea-counter-title mb-2">Total Amount</h5>
                                                    <b>Rs.4500/-</b>
                                                </div>

                                                <div className="passenger-add mt-4">
                                                    <h5 className="yswea-counter-title mb-2">Passenger details
                                                                </h5>
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Name</label>
                                                                    <input className="form-control" type="text"
                                                                        placeholder="Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <input className="form-control" type="email"
                                                                        placeholder="Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Phone number</label>
                                                                    <input className="form-control"
                                                                        type="number"
                                                                        placeholder="Phone Number" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Pick up</label>
                                                                    <input className="form-control"
                                                                        placeholder="pick up address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="buttons mt-4 flex-start">
                                                            <a href="#"
                                                                className="ysewa-button border-button sm-button">Back</a>
                                                            <a href="#" className="ysewa-button sm-button"
                                                                data-toggle="modal"
                                                                data-target="#confirm">Confirm</a>
                                                        </div>

                                                    </form>
                                                </div>

                                            </div>

                                            <div className="col-md-4">
                                                <div className=" table-seat-card">
                                                    <div className="card-header flex-between">
                                                        <h5>Seat details</h5>

                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="seat-symbol-list flex-between">
                                                            <li>
                                                                <span className="seat-symbol available">

                                                                </span>
                                                                <div className="seat-info">
                                                                    <p>Available</p>
                                                                    <h6>24</h6>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <span className="seat-symbol booked">

                                                                </span>
                                                                <div className="seat-info">
                                                                    <p>Booked</p>
                                                                    <h6>5</h6>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <span className="seat-symbol preserved">

                                                                </span>
                                                                <div className="seat-info">
                                                                    <p>Preserved</p>
                                                                    <h6>10</h6>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <span className="seat-symbol cancel">

                                                                </span>
                                                                <div className="seat-info">
                                                                    <p>cancel</p>
                                                                    <h6>1</h6>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="card-footer manage-price-footer">
                                                        <div className="icons">
                                                            <a href="chalani.html" className="print"><i
                                                                className="material-icons">print</i></a>
                                                            <a href="chalani.html" className="pdf"><i
                                                                className="material-icons">picture_as_pdf</i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </td>
                                </tr>

                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
