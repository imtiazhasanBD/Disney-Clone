import React from 'react'

const HrMovieCard = ({movie}) => {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in cursor-pointer'>
       <img src={"https://image.tmdb.org/t/p/original"+ movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gary-400'/>
       <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard
