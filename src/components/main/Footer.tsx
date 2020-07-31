import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div id="left-side">
                <p>Mateusz Kleszcz</p>
                <p>Phone: +48 537 396 934</p>
                <p>Email: kleeeszcz@gmail.com</p>
            </div>
            <div id="right-side">
                <ul className="social-media-links">
                    <li>fb</li>
                    <li>twitter</li>
                    <li>linkedin</li>
                    <li>github</li>
                </ul>
            </div>
            <div id="lower-belt">
                Copyright Mateusz Kleszcz
            </div>
        </footer>
    );
};

export default Footer;