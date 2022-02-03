import React from 'react';
import image from '../common/choose-us.png';
import '../Components/Choose.style.css';

const Choose = () =>{
    return(
        <div className="container pt-4">
            <div className="row">
                <div className="col">
                    <img id='choose-image' src={image} alt="" />
                </div>
                <div className="col">
                   <h1 id='chooseus-text'>Why choose us?</h1>
                   <p id='chooseus-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores laudantium et, nam mollitia esse quae, provident neque repudiandae voluptatem eius ullam, accusantium aliquam corrupti! Natus totam placeat deserunt accusamus!</p>
                   <button className='btn' id='chooseus-learn'>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Choose;