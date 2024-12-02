import React, { useEffect, useState,useRef } from 'react'
import GobalApi from '../services/GobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';


const MovieList = ({genreId,index}) => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getMovieByGenresId();
    }, [])

    const getMovieByGenresId = () => {
        GobalApi.getMovieByGenreId(genreId)
        .then((res) => {
            setMovieList(res.data.results);
        })
    }

    const sliderLeft = (element) => {
      element.scrollLeft -= 500;
  } 
  const sliderRight = (element) => {
      element.scrollLeft += 500;
  } 

  return (
    
    <div className='relative'>
       <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} 
    className={`hidden md:block text-white text-[50px] absolute p-2 z-10 cursor-pointer    ${index%3==0?'mt-[80px]':'mt-[150px]'}`}/>

      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>

        {movieList.map((item) => (
        index % 3 ===0?  <HrMovieCard movie={item} key={item.id} /> : <MovieCard movie={item} key={item.id}/>
        
          ))}
      </div>
      
      <HiChevronRight onClick={() => {sliderRight(elementRef.current)}} className={`hidden md:block text-white text-[50px] absolute p-2 z-10 cursor-pointer right-0 top-0 ${index%3==0?'mt-[80px]':'mt-[150px]'}`}/>
    </div>
  )
}

export default MovieList;



