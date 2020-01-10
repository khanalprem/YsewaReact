import React, { Component } from 'react'

export default class BusList extends Component {
    render() {
        return (
            <>

                <div className="card-header flex-between">
                    <h5>Bus list</h5>
                    <a href="#" className="ysewa-button border-button sm-button" data-toggle="modal"
                        data-target="#newbus">Add new</a>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="ysewa-table  counter-table  table">
                            <thead>
                                <tr>
                                    <th>Bus no</th>
                                    <th>bus type</th>
                                    <th>Number seat</th>
                                    <th>Driver</th>
                                    <th>Condutor</th>
                                    <th>Ownter</th>
                                    <th width="20%">status</th>
                                    <th>Action</th>
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
                                        <span className="bus-type">AC</span>
                                    </td>
                                    <td>
                                        <span className="total-seat">18</span>
                                    </td>

                                    <td>
                                        <div className="driver-info">
                                            <strong>Anil Maharjan</strong>
                                            <span>9856055360</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="driver-info">
                                            <strong>Anil Maharjan</strong>
                                            <span>9856055360</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="driver-info">
                                            <strong>Sunil shakya</strong>
                                            <span>9856055360</span>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="green status">approved</a>
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
                                            </ul>
                                        </div>
                                    </td>

                                </tr>
                                <tr className="toggle-row">
                                    <td colspan="8">
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
                                            </div>
                                            <div className="col-md-4">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="modal fade" id="newbus">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">


                                <div className="modal-header flex-between">
                                    <h4 className="modal-title">Add new bus</h4>
                                    <button type="button" className="close"
                                        data-dismiss="modal">&times;</button>
                                    <a href="#" className="ysewa-button border-button sm-button"
                                        data-toggle="modal" data-target="#newbus">Add new</a>
                                </div>


                                <div className="modal-body">
                                    <div className="table-responsive">
                                        <table className="ysewa-table  counter-table border-table mr-0  table">
                                            <thead>
                                                <tr>
                                                    <th rowspan="2">Bus no</th>
                                                    <th rowspan="2">Bus type</th>
                                                    <th rowspan="2">Number of seat</th>
                                                    <th colspan="2">Driver</th>
                                                    <th colspan="2">Conductor</th>
                                                    <th colspan="2">Owner</th>
                                                </tr>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Phone number</th>
                                                    <th>Name</th>
                                                    <th>Phone number</th>
                                                    <th>Name</th>
                                                    <th>Phone number</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-group mr-0">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group mr-0">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>


                                <div className="modal-footer">
                                    <div className="buttons">
                                        <button type="button" className="ysewa-button border-button sm-button"
                                            data-dismiss="modal">Cancel</button>
                                        <button type="button" className="ysewa-button sm-button"
                                            data-dismiss="modal">save</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
