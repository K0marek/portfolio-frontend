import React from 'react';
import Skills from './Skills';
import './Main.scss'
import Footer from './Footer';
import HeroImage from './HeroImage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Dashboard = () => {

    return (
        <div id="dashboard">
            <HeroImage />
            <AboutMe />
            <Skills />
            <ContactMe />
            <Projects />
            <Footer />
        </div>
    );
};

export default Dashboard;