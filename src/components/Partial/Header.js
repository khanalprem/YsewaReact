import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  
import logo from '../../static/img/bus.png'

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <div className="container-fluid">
                    <div className="headerWrap">
                        <div className="headLeft">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt="logo" /></Link>
                            </div>
                        </div>

                        <div className="headRight">
                            <nav id="site-navigation" className="main-navigation" role="navigation">
                                <div className="toggle-button">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="menu-primary-container">
                                    <ul id="primary-menu" className="menu nav-menu">
                                        <li className="menu-item menu-item-has-current">
                                        <Link to="/">Home</Link>
                                        </li>
                                        <li className="menu-item ">
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li className="menu-item">
                                        <Link to="/howit">How it works</Link>
                                        </li>

                                    </ul>
                                </div>
                            </nav>
                            <div className="header-btns flex-end">
                                <button type="button"
                                    className="btn ysewa-button border-button"><i>settings_phone</i>9856012345</button>
                                <button type="button" className="btn ysewa-button sm-button border-button"><Link to="dashboard">Sign in/up</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            )
        }
    }
export default Header;
