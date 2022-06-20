import React from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = ({toggleDarkMode}) => {
    AOS.init()
    return (
        <div
        data-aos="fade-up"
        data-aos-duration="600"
        >

            <button onClick={toggleDarkMode}>Toggle Dark Theme</button>
        </div>
    )
}

export default Home;