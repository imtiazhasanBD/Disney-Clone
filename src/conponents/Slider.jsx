import React, { useEffect, useRef, useState } from 'react'
import GobalApi from '../services/GobalApi'
import { v4 as uuidv4 } from 'uuid';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList , setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GobalApi.getTrendingVideos
        .then((res) => {
          setMovieList(res.data.results);
        })
    }

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    } 
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    } 

  return (
    <div>
        
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => {sliderLeft(elementRef.current)}}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => {sliderRight(elementRef.current)}}/>

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
       {movieList.map((movie, index) => (
           <img src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} key={uuidv4()} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 hover:border-[4px] border-gray-400 transition-all duration-300  box-border'/>

       ))}
    </div>
    </div>
  )
}

export default Slider;
