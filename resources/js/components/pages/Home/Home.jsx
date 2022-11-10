import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import ContactUS from "../../layout/ContactUS";
import Hero from "../../layout/Hero";
import Services from "./Services";
import Statistics from "./Statistics";
import Gallery from "./Gallery";

import "../../assets/style/Home_style.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="body">
                <Hero />
                <Services />
                <Statistics />
                <Gallery />
                <ContactUS />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
