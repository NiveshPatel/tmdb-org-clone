import React from 'react'
import "./home.scss"
import Herobanner from './herobanner/Herobanner'
import Trending from './trending/Trending'
const Home = () => {
  return (
    <div className='herobanner'>
        <Herobanner/>
        <Trending/>
       
    </div>
  )
}

export default Home