import React from 'react';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

export default function Home() {
  return (
    <div className='home-wrapper'>
      <div className='container w-full mx-auto items-center'>
        <ImageSlider />
        <Viewers/>
      </div>
    </div>
  )
}
