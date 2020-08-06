import React from 'react';
import heroimage from '../../images/heroimage.jpg'
import { motion } from 'framer-motion'

const HeroImage = () => {
    return (
        <motion.section id="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="banner">
                <div className="hero-text">
                    <h1>Mateusz Kleszcz</h1>
                    <p>Front-end Developer</p>
                </div>
            </div>
        </motion.section>
    );
};

export default HeroImage;