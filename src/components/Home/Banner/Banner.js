import React from 'react';
import './Banner.css';
import img from '../../../images/mountain-travel4.jpg';

const Banner = () => {
    return (
        <div className='banner-section'>
            <div class="row">
                <div class="col-6">
                    <div className='banner-text'>
                        <h1 className='text-warning'>IT'S TIME FOR HIKING</h1>
                        <br />
                        <h4><i>'Of all the paths you take in life, make sure a few of them are dirt'</i></h4>
                        <br />
                        <h3 className='ms-4'>JOHN MUIR</h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque sunt facilis distinctio deserunt voluptates ab blanditiis ut illo ad aspernatur et qui nihil, impedit rerum necessitatibus cupiditate assumenda ex officia incidunt reprehenderit soluta neque.</p>
                    </div>
                </div>
                <div class="col-6"><img className='banner-img' src={img} alt='Banner' /></div>
            </div>
        </div>
    );
};

export default Banner;