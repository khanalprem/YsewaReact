import React, { Component } from 'react';
import Header from "../Partial/Header";
import Footer from "../Partial/Footer";
import { Breadcrumb } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';
import Overview from './Overview/Overview';
import BusList from './DashboardComponents/BusList/BusList';
import RouteList from './DashboardComponents/RouteList/RouteList';
import BusSchduled from './DashboardComponents/BusScheduled/BusScheduled';
import ManageSeat from './DashboardComponents/ManageSeat/ManageSeat';


export default class CounterDashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listActive:0
        }
    }
    setlistActive = (e)=>{
        this.setState({
            listActive:e
        })
    }
    
    render() {
        return (
            <>
                <Header />
                <Breadcrumb />

                <div className="container-fluid">
                    <div className="dashboard-wrapper mt-5">
                        <div className="row">
                            <Sidebar listActive={this.state.listActive} setActive={this.setlistActive}/>
                            <div class="col-lg-9 col-md-8">
                                <div class="card ">
                                    {this.state.listActive == 0 ? <Overview/> : this.state.listActive == 1 ? <BusList/> : this.state.listActive == 2 ? <RouteList/> : this.state.listActive == 3 ? <BusSchduled/> : this.state.listActive == 4 ? <ManageSeat /> : ""}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
