import React, { Component } from 'react';
import {CounterJson} from "./CounterJson";
import CounterCard from './CounterCard';

export default class Counter extends Component {
    render() {
        return (
            <>
                <section className="counter-section pd-7">
                    <div className="container">
                        <div className="ysewa-title">
                            <h3>Member Are Growing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, nostrud exercitation.</p>
                        </div>
                        <div className="row">
                            {CounterJson.map((e)=>{
                               return <CounterCard countTitle={e.countTitle} countNumber={e.countNumber} countDsc={e.countDsc} />
                            })}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
