import React from 'react';
import './Info.css'

import img1 from '../../images/mountain-travel4.jpg'
import img2 from '../../images/mountain-travel.jpg'
import img3 from '../../images/mountain-travel3.jpg'

const Info = () => {
    return (
        <div>
            <h1 className='text-warning'>LET'S GO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut enim laudantium minima tempora adipisci? Quam distinctio dicta voluptatibus natus voluptatem minus placeat asperiores perspiciatis odit ullam, dolor esse nam tempora illum atque veritatis unde architecto rem soluta rerum sunt quasi.</p>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={img1} class="card-img-top info-img" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Mountain Travel, Bangladesh</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img2} class="card-img-top info-img" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Mountain Travel, Germany</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img3} class="card-img-top info-img" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Mountain Travel, India</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn showMore-button'>SHOW MORE</button>

        </div>
    );
};

export default Info;