import React from 'react'
import Header from './conponents/Header'
import Slider from './conponents/Slider'
import ProductionHouse from './conponents/ProductionHouse'
import GenresMovieList from './conponents/GenresMovieList'


function App() {

  return (
    <>
        <div className="">
           <Header/>
           <Slider/>
           <ProductionHouse/>
           <GenresMovieList/>
        </div>
    </>
  )
}

export default App
