import React from 'react'
import "./Home.css";
import HomeBackground from './img/HomeBackground.jpg';
import Product from './Product.js'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={HomeBackground} alt='Amazon Home Background'></img>
      </div>

      <div className='home__row'>
        <Product />
        <Product />
      </div>

      <div className='home__row'>
        <Product />
        <Product />
        <Product />
      </div>

      <div className='home__row'>
        <Product />
      </div>

    </div>
  )
}

export default Home