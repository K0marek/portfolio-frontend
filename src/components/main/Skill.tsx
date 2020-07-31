import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    }, [])

    return (
        <div className="skill" style={{ color }}>
            {content}
            <p className='caption'>{name}</p>
        </div>
    );
};

export default Skill;