import React, { Component } from 'react';
import Header from "../Partial/Header";
import Footer from "../Partial/Footer";
import Banner from "../Home/Banner";
import HomeSearch from "../Home/HomeSearch";
import Feature from "./Feature/Feature";
import TestiSlider from "./TestiSlider/TestiSlider";
import HomeApp from "../Home/HomeApp";
import Counter from "./Counter/Counter";
import ClientSlider from "./ClientSlider/ClientSlider";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="main-content">
                    <Banner />
                    <HomeSearch />
                    <Feature />
                    <TestiSlider />
                    <HomeApp />
                    <Counter />
                    <ClientSlider />
                </main>
                <Footer />
            </>
        )
    }
}
export default Home;
