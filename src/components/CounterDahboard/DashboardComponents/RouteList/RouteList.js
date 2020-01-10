import React, { Component } from 'react'

export default class RouteList extends Component {
    render() {
        return (
            <>
                <div class="card-header flex-between">
                    <h5>route list</h5>
                    <a href="#" class="ysewa-button border-button sm-button" data-toggle="modal"
                        data-target="#newbus">Add new</a>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="ysewa-table  counter-table table">
                            <thead>
                                <tr>
                                    <th>From</th>
                                    <th>to</th>
                                    <th width="20%">status</th>
                                    <th width="10%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="default">
                                    <td>
                                        <span>Kathmandu</span>
                                    </td>
                                    <td>
                                        <span>Pokhara</span>
                                    </td>
                                    <td>
                                        <a href="" class="green status">approved</a>
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
                                            </ul>
                                        </div>
                                    </td>

                                </tr>
                                <tr class="default">
                                    <td>
                                        <span>Kathmandu</span>
                                    </td>
                                    <td>
                                        <span>Pokhara</span>
                                    </td>
                                    <td>
                                        <a href="" class="green status">approved</a>
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
                                            </ul>
                                        </div>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="modal fade" id="newbus">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">


                                <div class="modal-header flex-between">
                                    <h4 class="modal-title">Add route</h4>
                                    <button type="button" class="close"
                                        data-dismiss="modal">&times;</button>
                                    <a href="#" class="ysewa-button border-button sm-button"
                                        data-toggle="modal" data-target="#newbus">Add new</a>
                                </div>


                                <div class="modal-body">
                                    <div class="table-responsive">
                                        <table class="ysewa-table  counter-table mr-0 table">
                                            <thead>
                                                <tr>
                                                    <th>from</th>
                                                    <th>to</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="form-group mr-0">
                                                            <input type="text" placeholder=""
                                                                class="form-control" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="form-group mr-0">
                                                            <input type="text" placeholder=""
                                                                class="form-control" />
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                                <div class="modal-footer">
                                    <div class="buttons">
                                        <button type="button" class="ysewa-button border-button sm-button"
                                            data-dismiss="modal">Cancel</button>
                                        <button type="button" class="ysewa-button sm-button"
                                            data-dismiss="modal">save</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="modal fade" id="confirm">
                        <div class="modal-dialog modal-md modal-dialog-centered">
                            <div class="modal-content">


                                <div class="modal-header flex-between ticket-header">
                                    <button type="button" class="close"
                                        data-dismiss="modal">&times;</button>
                                </div>


                                <div class="modal-body">
                                    <div class="ticket-details">
                                        <ul>
                                            <h4 class="yswea-counter-title">Passenger details</h4>
                                            <li><span>Passenger Name</span><b>prem prasad khanal</b></li>
                                            <li><span>phone number</span><b
                                                class="bus-number">9856055360</b></li>
                                            <li><span>email</span><b>khnl.prem@gmail.com</b></li>
                                            <li><span>pick up address</span><b>Banasthali</b></li>
                                        </ul>
                                        <ul>
                                            <h4 class="yswea-counter-title">Bus details</h4>
                                            <li><span>Bus number</span><b class="bus-number"><small>Ba 1
                                                                    Kha</small>1934</b></li>
                                            <li><span>Bus type</span><b>AC</b></li>
                                            <li><span>Date</span><b>2076-10-10</b></li>
                                            <li><span>time</span><b>07:00 am</b></li>
                                            <li><span>seats</span><b>a1</b></li>
                                            <li><span>travel</span><b>day</b></li>
                                        </ul>
                                        <ul>
                                            <h4 class="yswea-counter-title">payment details</h4>
                                            <li><span>total seat</span><b>2</b></li>
                                            <li><span>total cost</span><b>rs.1600</b></li>
                                        </ul>
                                    </div>

                                </div>


                                <div class="modal-footer ticket-footer">
                                    <div class="print-icons">
                                        <a href="#" class="print"><i class="material-icons">print</i></a>
                                        <a href="#" class="pdf"><i
                                            class="material-icons">picture_as_pdf</i></a>
                                    </div>
                                    <div class="buttons">
                                        <button type="button" class="ysewa-button border-button sm-button"
                                            data-dismiss="modal">dismiss</button>
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
