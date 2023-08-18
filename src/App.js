import React, { useRef } from "react";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
    const cursor = useRef(null);
    const cursor2 = useRef(null);
    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;

        // console.log(e.clientX);
        cursor2.current.style.top = `${e.clientY}px`;
        cursor2.current.style.left = `${e.clientX}px`;
    };
    return (
        <div
            className="app"
            style={{ minHeight: "100vh", minWidth: "100vw" }}
            onMouseMove={changePosition}
        >
            <Header />
            <Home />
            <About />
            <Services />
            <Portfolio />
            <News />
            <Contact />
            <Footer />
            <div className="cursor-outer" ref={cursor}></div>
            <div className="cursor-inner" ref={cursor2}></div>
        </div>
    );
}

export default App;
