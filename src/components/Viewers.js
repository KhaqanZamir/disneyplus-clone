import React from 'react';
import ImageDisney from '../assets/images/viewers-disney.png';
import ImageMarvel from '../assets/images/viewers-marvel.png';
import ImageNational from '../assets/images/viewers-national.png';
import ImagePixar from '../assets/images/viewers-pixar.png';
import ImageStarWars from '../assets/images/viewers-starwars.png';
import VideoDisney from '../assets/videos/1564674844-disney.mp4';
import VideoMarvel from '../assets/videos/1564676115-marvel.mp4';
import VideoNational from '../assets/videos/1564676296-national-geographic.mp4';
import VideoPixar from '../assets/videos/1564676714-pixar.mp4';
import VideoStarwars from '../assets/videos/1608229455-star-wars.mp4';


export default function Viewers() {
    return (
        <div className='bg-transparent w-full mt-8'>
            <div className='flex flex-wrap w-full justify-center lg:justify-between align-middle gap-5'>
                <div className='viewerCard w-full md:w-[47%] lg:w-[18%] max-w-[350px] min-h-[180px] lg:min-h-[140px] relative border-[3px] border-white-trans rounded-[10px] shadow-shadow1 cursor-pointer overflow-hidden'>
                    <img src={ImageDisney} alt='Viewer-1' />
                    <video autoPlay loop playsInline>
                        <source src={VideoDisney} type='video/mp4' />
                    </video>
                </div>
                <div className='viewerCard w-full md:w-[47%] lg:w-[18%] max-w-[350px] min-h-[180px] lg:min-h-[140px] relative border-[3px] border-white-trans rounded-[10px] shadow-shadow1 cursor-pointer overflow-hidden'>
                    <img src={ImageMarvel} alt='Viewer-1' />
                    <video src={VideoMarvel} autoPlay loop playsInline>
                        <source src={VideoMarvel} type='video/mp4' />
                    </video>
                </div>
                <div className='viewerCard w-full md:w-[47%] lg:w-[18%] max-w-[350px] min-h-[180px] lg:min-h-[140px] relative border-[3px] border-white-trans rounded-[10px] shadow-shadow1 cursor-pointer overflow-hidden'>
                    <img src={ImageNational} alt='Viewer-1' />
                    <video autoPlay loop playsInline={true}>
                        <source src={VideoNational} type='video/mp4' />
                    </video>
                </div>
                <div className='viewerCard w-full md:w-[47%] lg:w-[18%] max-w-[350px] min-h-[180px] lg:min-h-[140px] relative border-[3px] border-white-trans rounded-[10px] shadow-shadow1 cursor-pointer overflow-hidden'>
                    <img src={ImagePixar} alt='Viewer-1' />
                    <video autoPlay loop playsInline={true}>
                        <source src={VideoPixar} type='video/mp4' />
                    </video>
                </div>
                <div className='viewerCard w-full md:w-[47%] lg:w-[18%] max-w-[350px] min-h-[180px] lg:min-h-[140px] relative border-[3px] border-white-trans rounded-[10px] shadow-shadow1 cursor-pointer overflow-hidden'>
                    <img src={ImageStarWars} alt='Viewer-1' />
                    <video autoPlay loop playsInline={true}>
                        <source src={VideoStarwars} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}
