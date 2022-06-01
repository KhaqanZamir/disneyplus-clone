import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../assets/images/slider-1.jpg';
import slider2 from '../assets/images/slider-2.jpg';
import slider3 from '../assets/images/slider-3.jpg';
import slider4 from '../assets/images/slider-4.jpg';
import Slider from 'react-slick';

export default function ImageSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className='homeSlider mt-5 h-full pb-5'>
      <Slider {...settings}>
        <div className='rounded-[4px] cursor-pointer relative'>
          <a href='/'>
            <img src={slider1} alt='slider-1' />
          </a>
        </div>
        <div className='rounded-[4px] cursor-pointer relative'>
          <a href='/'>
            <img src={slider2} alt='slider-2' />
          </a>
        </div>
        <div className='rounded-[4px] cursor-pointer relative'>
          <a href='/'>
            <img src={slider3} alt='slider-3' />
          </a>
        </div>
        <div className='rounded-[4px] cursor-pointer relative'>
          <a href='/'>
            <img src={slider4} alt='slider-4' />
          </a>
        </div>
      </Slider>
    </div>
  )
}
