import React, { useRef } from 'react';
import { useEntranceAnimation } from '../../hooks/useEntranceAnimation';
import { motion } from 'framer-motion';

const Projects = () => {

    const projectsElement = useRef<HTMLDivElement>(null)

    const shouldShow = useEntranceAnimation(projectsElement)

    return (
        <section id="projects">
            <motion.div ref={projectsElement}>
                <h1>Projects</h1>
            </motion.div>
        </section>
    );
};

export default Projects;