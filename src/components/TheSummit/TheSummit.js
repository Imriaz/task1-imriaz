import React from 'react';
import './TheSummit.css'

const TheSummit = () => {
    return (
        <div class="subscribe-section top-bottom-space">
            <h1 className='text-white'>The Summit</h1>
            <p className='textCenter'>The best part of Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum fuga fugit harum minus dignissimos veniam maiores animi impedit, pariatur odio enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam sed dolorum cupiditate soluta porro similique, dolor animi quos, doloremque molestiae! A necessitatibus quia animi voluptatum dolorem aliquid tempora ad.</p>
            <div class="subscribe-form">
                <input class="subscribe-input" type="email" placeholder="Your Email" />
                <button class="subscribe-btn">Subscribe</button>
            </div>
        </div>
    );
};

export default TheSummit;