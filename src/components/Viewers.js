import React from 'react';
import Viewer1 from '../assets/images/viewers-disney.png';
import Viewer2 from '../assets/images/viewers-marvel.png';
import Viewer3 from '../assets/images/viewers-national.png';
import Viewer4 from '../assets/images/viewers-pixar.png';
import Viewer5 from '../assets/images/viewers-starwars.png';

export default function Viewers() {
  return (
    <div className='bg-transparent w-full mt-16'>
        <div className='container w-full mx-auto h-auto'>
            <div className='flex flex-wrap w-full justify-center align-middle gap-5'>
                <div className='w-full md:w-[50%] lg:w-[18%] max-w-[350px] relative border-2 border-white-trans rounded-[10px]'>
                    <img src={Viewer1} alt='Viewer-1' />
                </div>
                <div className='w-full md:w-[50%] lg:w-[18%] max-w-[350px] relative border-2 border-white-trans rounded-[10px]'>
                    <img src={Viewer2} alt='Viewer-1' />
                </div>
                <div className='w-full md:w-[50%] lg:w-[18%] max-w-[350px] relative border-2 border-white-trans rounded-[10px]'>
                    <img src={Viewer3} alt='Viewer-1' />
                </div>
                <div className='w-full md:w-[50%] lg:w-[18%] max-w-[350px] relative border-2 border-white-trans rounded-[10px]'>
                    <img src={Viewer4} alt='Viewer-1' />
                </div>
                <div className='w-full md:w-[50%] lg:w-[18%] max-w-[350px] relative border-2 border-white-trans rounded-[10px]'>
                    <img src={Viewer5} alt='Viewer-1' />
                </div>
            </div>
        </div>
    </div>
  )
}
