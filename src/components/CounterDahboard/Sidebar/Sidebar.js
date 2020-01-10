import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sidebarList:[
                 {
                    sidebarName:'overview',
                    sidebarIcon:'dashboard', 
                 },
                 {
                    sidebarName:'Bus list',
                    sidebarIcon:'confirmation_number', 
                 },
                 {
                    sidebarName:'Route List',
                    sidebarIcon:'timer', 
                 },
                 {
                    sidebarName:'Bus Scheduled',
                    sidebarIcon:'timer', 
                 },
                 {
                    sidebarName:'Manage seat',
                    sidebarIcon:'add_circle_outline', 
                 },
                //  {
                //     sidebarName:'Log out',
                //     sidebarIcon:'power_settings_new', 
                //  },
             ]
        }
    }
    
    render() {
        return (
            <div className="col-lg-3 col-md-4">
                <ul className="dashboard-sidebar">
                    {this.state.sidebarList.map((e,i)=>{
                    return <li className={this.props.listActive == i ? 'active' : ''} onClick={()=>{this.props.setActive(i)}}><a ><i className="material-icons"> {e.sidebarIcon}</i>{e.sidebarName} </a></li>
                    })}
                </ul>
            </div>
        )
    }
}
