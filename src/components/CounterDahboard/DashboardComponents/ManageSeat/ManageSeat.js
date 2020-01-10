import React, { Component } from 'react';
import DashboardFilter from '../DashboardFilter';

export default class ManageSeat extends Component {
    render() {
        return (
            <>
                <DashboardFilter/>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="ysewa-table  counter-table table">
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
                                <tr class="default">
                                    <td>
                                        <a href="booking.html" class="businfo-td flex-start">
                                            <h6><span>Ba 1 Kha</span>1970</h6>
                                        </a>
                                    </td>
                                    <td>
                                        <div class="location">
                                            <strong>KTM</strong>
                                            <time>07:00 AM</time>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="bus-type">AC</span>
                                    </td>
                                    <td>
                                        <span class="total-seat">18</span>
                                    </td>
                                    <td>
                                        <a href="manage-seat.html" class="red status">manage seat</a>
                                    </td>
                                    <td>
                                        <div class="table-action">
                                            <a href="#" class="more-action">
                                                <i class="material-icons">more_vert</i>
                                            </a>
                                            <ul class="dropdown-animation">
                                                <li>
                                                    <a href="#" class="flex-start">
                                                        <i class="material-icons">edit</i> Edit
                                                                </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="flex-start">
                                                        <i class="material-icons">delete</i>delete
                                                                </a>

                                                </li>
                                                <li>
                                                    <a href="#" class="flex-start">
                                                        <i
                                                            class="material-icons">settings_applications</i>Manage
                                            seat
                                                                </a>

                                                </li>
                                            </ul>
                                        </div>
                                    </td>

                                </tr>
                                <tr class="toggle-row">
                                    <td colspan="6">
                                        <div class="row">
                                            <div class="col-md-8">

                                                <div class="bus-inner">
                                                    <div class="cockpit">
                                                        <ol class="cabin fuselage">
                                                            <li class="seat-row row--1">
                                                                <ol class="seats" type="A">
                                                                    <li class="seat">
                                                                        <input type="checkbox" id="CA1" />
                                                                        <label for="CA1">CA</label>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li class="seat-row row--2">
                                                                <ol class="seats" type="A">
                                                                    <li class="seat">
                                                                        <input type="checkbox" id="CB" />
                                                                        <label for="CB">CB</label>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li class="seat-row row--3">
                                                                <ol class="seats" type="A">
                                                                    <li class="seat">
                                                                        <input type="checkbox" id="CC" />
                                                                        <label for="CC">CC</label>
                                                                    </li>
                                                                    <li class="seat">
                                                                        <input type="checkbox" id="CD" />
                                                                        <label for="CD">CD</label>
                                                                    </li>
                                                                    <li class="seat">
                                                                        <input type="checkbox" id="CE" />
                                                                        <label for="CE">CE</label>
                                                                    </li>
                                                                    <li class="seat">
                                                                        <input type="checkbox" id="CF" />
                                                                        <label for="CF">CF</label>
                                                                    </li>
                                                                    <li class="seat">
                                                                        <input type="checkbox" id="CG" />
                                                                        <label for="CG">CG</label>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div class="exit exit--front fuselage">

                                                    </div>
                                                    <ol class="cabin fuselage">
                                                        <li class="seat-row row--1">
                                                            <ol class="seats" type="A">
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A1" />
                                                                    <label for="A1">A1</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A2" />
                                                                    <label for="A2">A2</label>
                                                                </li>

                                                                <li class="seat">
                                                                    <input type="checkbox" disabled
                                                                        id="B1" />
                                                                    <label for="B1">B1</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="B2" />
                                                                    <label for="B2">B2</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li class="seat-row row--2">
                                                            <ol class="seats" type="A">
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A3" />
                                                                    <label for="A3">A3</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A4" />
                                                                    <label for="A4">A4</label>
                                                                </li>

                                                                <li class="seat">
                                                                    <input type="checkbox" id="B3" />
                                                                    <label for="B3">B3</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="B4" />
                                                                    <label for="B4">B4</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li class="seat-row row--3">
                                                            <ol class="seats" type="A">
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A5" />
                                                                    <label for="A5">A5</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A6" />
                                                                    <label for="A6">A6</label>
                                                                </li>

                                                                <li class="seat">
                                                                    <input type="checkbox" id="B5" />
                                                                    <label for="B5">B5</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="B6" />
                                                                    <label for="B6">B6</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li class="seat-row row--4">
                                                            <ol class="seats" type="A">
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A7" />
                                                                    <label for="A7">A7</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A8" />
                                                                    <label for="A8">A8</label>
                                                                </li>

                                                                <li class="seat">
                                                                    <input type="checkbox" id="B7" />
                                                                    <label for="B7">B7</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="B8" />
                                                                    <label for="B8">B8</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li class="seat-row row--5">
                                                            <ol class="seats" type="A">
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A9" />
                                                                    <label for="A9">A9</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A10" />
                                                                    <label for="A10">A10</label>
                                                                </li>

                                                                <li class="seat">
                                                                    <input type="checkbox" id="B9" />
                                                                    <label for="B9">B9</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="B10" />
                                                                    <label for="B10">B10</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li class="seat-row row--6">
                                                            <ol class="seats" type="A">
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A11" />
                                                                    <label for="A11">A11</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="A12" />
                                                                    <label for="A12">A12</label>
                                                                </li>

                                                                <li class="seat">
                                                                    <input type="checkbox" id="B11" />
                                                                    <label for="B11">B11</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="B12" />
                                                                    <label for="B12">B12</label>
                                                                </li>

                                                            </ol>
                                                        </li>
                                                        <li class="seat-row row--7">
                                                            <ol class="seats" type="A">
                                                                <li class="seat">
                                                                    <input type="checkbox" id="13" />
                                                                    <label for="13">13</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="14" />
                                                                    <label for="14">14</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="15" />
                                                                    <label for="15">15</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="16" />
                                                                    <label for="16">16</label>
                                                                </li>
                                                                <li class="seat">
                                                                    <input type="checkbox" id="17" />
                                                                    <label for="17">17</label>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>

                                            <div class="col-md-4">
                                                <div class="manage-price table-seat-card">
                                                    <div class="card-header flex-between">
                                                        <h5>Manage seat</h5>
                                                        <div class="card-option">
                                                            <a href="#">
                                                                <i class="material-icons">more_vert</i>
                                                            </a>
                                                            <ul class="dropdown-animation">
                                                                <li>
                                                                    <a href="#" class="flex-start">
                                                                        All
                                                                                </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div class="card-body">
                                                        <form>
                                                            <div class="form-group">
                                                                <label>A1</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="price" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>A2</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="price" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>B1</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="price" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label>B2</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="price" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="card-footer manage-price-footer">
                                                        <div class="buttons">
                                                            <a href="#"
                                                                class="ysewa-button sm-button">Save</a>
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
                </div>
            </>
        )
    }
}
