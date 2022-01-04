import React from 'react';
import './Hiking.css';
import img from '../../images/mountain-travel8.jpg';

const Hiking = () => {
    return (
        <>
            <div className='hiking-section'>
                <h1>Hiking in the mountains</h1>
                <br />
                <p className='hiking-textCenter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusamus! Ipsa deleniti architecto recusandae hic amet aperiam et repellat molestias. Ab sunt nobis vel fuga, laborum soluta alias odio ducimus provident distinctio quibusdam labore repellendus cupiditate deserunt, quas temporibus, perferendis exercitationem! Animi, mollitia optio vitae explicabo molestiae ullam deleniti labore?</p>
            </div>

            <div>
                <img className='hiking-img' src={img} alt="" />
            </div>

        </>
    );
};

export default Hiking;