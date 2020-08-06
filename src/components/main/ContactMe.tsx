import React, { useRef, useState } from 'react';
import { useEntranceAnimation } from '../../hooks/useEntranceAnimation';
import { motion } from 'framer-motion'

const ContactMe = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const contactMeElement = useRef<HTMLDivElement>(null)

    const shouldShow = useEntranceAnimation(contactMeElement)

    const handleContactFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(name, email, message)
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(e.target.value)

    return (
        <section id="contact-me">
            <motion.div ref={contactMeElement}
                initial={{ x: '-100vw' }}
                animate={{ x: shouldShow ? 0 : '-100vw' }}
            >
                <h1>Contact Me</h1>
                <form id="contact-form" onSubmit={handleContactFormSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="message">Message</label>
                        <textarea className="materialize-textarea" name="message" id="message" value={message} onChange={handleMessageChange} />
                    </div>
                    <button className="btn waves-effect blue darken-4" type="submit" name="action">Sign up</button>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactMe;