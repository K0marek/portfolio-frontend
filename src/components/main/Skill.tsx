import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

interface SkillProps {
    name: string,
    type: string,
    src: any,
    color: string
}

const Skill = ({ name, type, src, color }: SkillProps) => {

    const [content, setContent] = useState<any>()

    useEffect(() => {
        if (type === 'icon')
            setContent(<FontAwesomeIcon className='skill-icon' icon={['fab', src]} />)
        else if (type === 'img')
            setContent(<img className='skill-icon' alt={name} src={require(`../../images/${src}`)} />)
    }, [name, src, type])

    return (
        <motion.div
            className="skill"
            style={{ color }}
            whileHover={{
                scale: 1.3,
                textShadow: '0px 0px 18px rgba(0, 0, 0, 0.6)'
            }}
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        >
            {content}
            <p className='caption'>{name}</p>
        </motion.div>
    );
};

export default Skill;