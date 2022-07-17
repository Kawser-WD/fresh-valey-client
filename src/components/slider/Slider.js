import React from 'react';
import slider1 from '../slider//sliderimg/img1.jpg'
import slider2 from '../slider//sliderimg/img2.jpg'
import slider3 from '../slider//sliderimg/istockphoto-1058029096-170667a.jpg'
const Slider = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={slider1} class="d-block" style={{height:'300px',width:'500px', objectFit:'cover'}} alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={slider2} class="d-block" style={{height:'300px',width:'500px', objectFit:'cover'}} alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={slider3} class="d-block" style={{height:'300px',width:'500px', objectFit:'cover'}} alt="..."/>
                </div>
            </div>
        </div>
    );
};

export default Slider;