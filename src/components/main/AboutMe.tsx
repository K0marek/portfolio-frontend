import React, { useRef } from 'react';
import { useEntranceAnimation } from '../../hooks/useEntranceAnimation';
import { motion } from 'framer-motion'

const AboutMe = () => {

    const aboutMeElement = useRef<HTMLDivElement>(null)

    const shouldShow = useEntranceAnimation(aboutMeElement)

    return (
        <section id="about-me">
            <motion.div ref={aboutMeElement}
                initial={{ x: '-100vw' }}
                animate={{ x: shouldShow ? 0 : '-100vw' }}
            >
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida vitae nisl ac aliquet. Quisque congue pellentesque purus in ultricies. Integer scelerisque nulla ut est imperdiet, at vestibulum risus efficitur. Nulla congue viverra lorem vel consequat. Fusce tincidunt augue ut quam sodales, suscipit elementum tellus posuere. Etiam a nulla est. Curabitur eget arcu orci. Ut luctus egestas purus ut lacinia. Maecenas ultrices, velit sed pharetra fringilla, nisi enim tristique felis, eget rutrum nisl magna ac sem. Nunc sit amet convallis dui, at pretium massa. Pellentesque venenatis bibendum semper. Sed ultrices lobortis nunc a varius. Phasellus mollis consequat ante vitae convallis. Nulla elit enim, efficitur quis nunc vel, volutpat imperdiet tellus. Proin semper lorem ac nibh cursus, eget lobortis metus pharetra. Nulla convallis blandit lorem, et maximus nisl tristique vitae.</p>
                <h1>Education</h1>
                <p>2016 - 2020</p>
                <p>Upper-Secondary School of Communications in Cracow</p>
                <p>2020 - presently</p>
                <p>AGH University of Science and Technology</p>
            </motion.div>
        </section>
    );
};

export default AboutMe;