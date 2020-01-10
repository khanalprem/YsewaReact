import React, { Component } from 'react';
import DashboardFilter from '../DashboardFilter';
import BusSchduledTable from './BusSchduledTable';

export default class BusSchduled extends Component {
    render() {
        return (
            <>
                <div className="card-header flex-between">
                    <h5>Bus Scheduled</h5>
                    <a href="#" className="ysewa-button border-button sm-button" data-toggle="modal"
                        data-target="#newbus">Add new</a>
                </div>
                <div className="card-body">

                    <DashboardFilter/>

                    <BusSchduledTable/>

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
                                        <table className="ysewa-table  counter-table mr-0 table">
                                            <thead>
                                                <tr>
                                                    <th>Bus no</th>
                                                    <th>Route</th>
                                                    <th>Departure Date & time</th>
                                                    <th>Arival date & time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-group mr-0">
                                                            <select className="selectpicker"
                                                                data-live-search="true">
                                                                <option>Ba 1 Kha 1934</option>
                                                                <option>Ba 1 Kha 1945</option>
                                                                <option>Na 1 Kha 1960</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group mr-0">
                                                            <select className="selectpicker"
                                                                data-live-search="true">
                                                                <option selected>Select Route</option>
                                                                <option>Kathmandu - Kakatvitta</option>
                                                                <option>Pokhara - Kathmandu</option>
                                                            </select>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <div className='input-group inline-date'
                                                                id='datetimepicker9'>
                                                                <input type='text' className="form-control date"
                                                                    placeholder="Departure date & time" />
                                                                <span className="input-group-append">
                                                                    <span className="input-group-text">
                                                                        <i
                                                                            className="material-icons">calendar_today</i>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <div className='input-group inline-date'
                                                                id='datetimepicker9'>
                                                                <input type='text' className="form-control date"
                                                                    placeholder="Arival date & time" />
                                                                <span className="input-group-append">
                                                                    <span className="input-group-text">
                                                                        <i
                                                                            className="material-icons">calendar_today</i>
                                                                    </span>
                                                                </span>
                                                            </div>
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
