import React from "react";
import Particle from "./Particle";
import backgroundImage from "../images/bg.jpg";

const Home = () => {
    return (
        <section className="home-section" id="home">
            <div className="background">
                <div className="background-image">
                    <img src={backgroundImage} alt="" />
                </div>
                <div className="particles-wrapper">
                    <div className="particles-container">
                        <Particle />
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
            <div className="content">
                <div className="inner_content">
                    <h1 className="title">
                        Pradip <span>Chaudhary</span>
                    </h1>
                    <h3> I am Full Stack Developer </h3>
                </div>
            </div>
            <div className="arrow_wrap"></div>
        </section>
    );
};

export default Home;
