import React from 'react';
import './Details.css';
import img1 from '../../images/mountain-travel.jpg';
import img2 from '../../images/mountain-travel2.jpg';

const Details = () => {
    return (
        <div>
            <div class="row">
                <div class="col-6"><img src={img1} className='details-img' alt='' /></div>
                <div class="col-6 bg-secondary details-section">
                    <div className='details-text'>
                        <h1>Discount up to 50% All Excursions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque sunt facilis distinctio deserunt voluptates ab blanditiis ut illo ad aspernatur et qui nihil, impedit rerum necessitatibus cupiditate assumenda ex officia incidunt reprehenderit soluta neque.</p>

                        <button className='btn details-button'>READ MORE</button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6 bg-warning details-section">
                    <div className='details-text'>
                        <h1>Friends & Family</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque sunt facilis distinctio deserunt voluptates ab blanditiis ut illo ad aspernatur et qui nihil, impedit rerum necessitatibus cupiditate assumenda ex officia incidunt reprehenderit soluta neque.</p>

                        <button className='btn details-button'>READ MORE</button>
                    </div>
                </div>
                <div class="col-6"><img className='details-img' src={img2} alt='' /></div>
            </div>
        </div >
    );
};

export default Details;