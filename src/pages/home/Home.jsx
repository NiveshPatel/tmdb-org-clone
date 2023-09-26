import React from 'react'
import "./home.scss"
import Herobanner from './herobanner/Herobanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated'
const Home = () => {
  return (
    <div className='herobanner'>
        <Herobanner/>

        <Trending/>
        <TopRated/>
        <Popular/>
       
    </div>
  )
}

export default Home