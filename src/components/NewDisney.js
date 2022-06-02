import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movie/movieSlice';

export default function NewDisney() {

    const newDisneyMovies = useSelector(selectNewDisney);

  return (
    <div className='mt-14'>
        <h4>
            New Disney+
        </h4>
        <div className='flex flex-wrap justify-center lg:justify-between align-middle w-full gap-5 mt-5'>
            {
                newDisneyMovies && newDisneyMovies.map((movie, key) => (
                    <div key={key} className='w-[45%] lg:w-[22%] lg:min-h-[150px] rounded-[10px] border-[3px] border-white-trans hover:border-white hover:scale-[1.05] transition-all duration-500 overflow-hidden cursor-pointer'>
                        <Link to={`/detail/` + movie.id}>                        
                            <img className='object-cover w-full h-full' src={movie.cardImg} alt={movie.title} />
                        </Link>                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}
