import React, { useState, useEffect } from 'react';
import BlackPlay from '../assets/images/play-icon-black.png';
import WhitePlay from '../assets/images/play-icon-white.png';
import PlusIcon from '../assets/images/watchlist-icon.svg';
import UsersIcon from '../assets/images/group-icon.png';
import { useParams } from 'react-router-dom';
import db from '../firebase';

export default function Detail() {

    const { id } = useParams();
    let [movieDetail, setMovieDetail] = useState({});
    
    useEffect(() => {
        db.collection("movies").doc(id).get().then((doc) => {
            if(doc.exists){
                setMovieDetail(doc.data());
            }else{
                console.log('No such document exists in Database.');
            }
        }).catch(error => {
            console.log('Error is:', error);
        })
    }, [id])
    console.log('ID', id)
    console.log('Movie Detail', movieDetail)

  return (
      <div className='relative block top-24 px-[calc(3.5vw+5px)]'>      
        <div className='container w-full mx-auto h-full'>
            <img className='w-full h-full object-cover -z-10 absolute top-0 left-0' src={movieDetail.backgroundImg} alt='CoverImage' />
            <div className='flex flex-col w-full items-start justify-center min-h-[calc(100vh-100px)]'>
                <img className='w-[200px] mt-auto' src={movieDetail.titleImg} alt='TitleImage' />
                <div className='mt-10 flex flex-wrap align-middle w-full gap-5'>
                    <button className='flex align-middle justify-center bg-white text-black rounded px-5 py-3 cursor-pointer gap-1'>
                        <img className='block w-6 h-6' src={BlackPlay} alt='PlayButton' />
                        <p className='my-auto p-0 tracking-widest font-bold'>PLAY</p>
                    </button>
                    <button className='flex align-middle justify-center bg-black bg-opacity-30 border border-white text-white rounded px-5 py-3 cursor-pointer gap-1'>
                        <img className='block w-6 h-6' src={WhitePlay} alt='PlayButton' />
                        <p className='my-auto p-0 tracking-widest font-bold'>Trailer</p>
                    </button>
                    <button className='flex align-middle justify-center bg-black bg-opacity-60 border border-white text-white rounded-[50%] p-2 h-max my-auto cursor-pointer gap-1'>
                        <img className='block w-6 h-6' src={PlusIcon} alt='PlayButton' />
                    </button>
                    <button className='flex align-middle justify-center bg-black bg-opacity-60 border border-white text-white rounded-[50%] p-0 h-max my-auto cursor-pointer gap-1'>
                        <img className='block w-10 h-10' src={UsersIcon} alt='PlayButton' />
                    </button>
                </div>
                <p className='text-white text-lg my-7 font-semibold'>
                    {movieDetail.subTitle}
                </p>
                <p className='text-white text-xl my-0 font-light mb-16'>
                    {movieDetail.description}
                </p>
            </div>
        </div>
      </div>
  )
}
