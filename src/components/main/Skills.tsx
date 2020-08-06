import React, { useState, useRef } from 'react';
import Skill from './Skill';
import { motion } from 'framer-motion'
import { useEntranceAnimation } from '../../hooks/useEntranceAnimation';

const Skills = () => {

    const skillsElement = useRef<HTMLDivElement>(null)

    const shouldShow = useEntranceAnimation(skillsElement)

    const [skills] = useState([{
        name: 'HTML',
        type: 'icon',
        src: 'html5',
        color: 'rgb(234, 98, 40)'
    }, {
        name: 'CSS',
        type: 'icon',
        src: 'css3-alt',
        color: 'rgb(51, 163, 213)'
    }, {
        name: 'JavaScript',
        type: 'icon',
        src: 'js',
        color: 'rgb(240, 219, 79)'
    }, {
        name: 'TypeScript',
        type: 'img',
        src: 'ts.png',
        color: 'rgb(0, 122, 204)'
    }, {
        name: 'React/Redux',
        type: 'icon',
        src: 'react',
        color: 'rgb(97, 219, 251)'
    }, {
        name: 'React Native',
        type: 'icon',
        src: 'react',
        color: 'rgb(97, 219, 251)'
    }, {
        name: 'Sass',
        type: 'icon',
        src: 'sass',
        color: 'rgb(205, 103, 153)'
    }, {
        name: 'Materialize',
        type: 'img',
        src: 'materialize.png',
        color: 'rgb(235, 109, 117)'
    }, {
        name: 'Bootstap',
        type: 'icon',
        src: 'bootstrap',
        color: 'rgb(96, 44, 80)'
    }, {
        name: 'NodeJS/Express',
        type: 'icon',
        src: 'node-js',
        color: 'rgb(60, 135, 58)'
    }, {
        name: 'MongoDB',
        type: 'img',
        src: 'mongodb.png',
        color: 'rgb(77, 179, 61)'
    }, {
        name: 'Git',
        type: 'icon',
        src: 'git-alt',
        color: 'rgb(241, 80, 47)'
    }])

    return (
        <section id="skills">
            <motion.div
                ref={skillsElement}
                initial={{ x: '-100vw' }}
                animate={{ x: shouldShow ? 0 : '-100vw' }}
            >
                <h1>Skills</h1>
                <div className="skills-container">
                    {skills.map(({ name, type, src, color }, index) => <Skill name={name} type={type} src={src} color={color} key={index} />)}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;