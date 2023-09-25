import React, { useState ,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import './Herobanner.scss'
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from "../../../components/lazyLoadImage/Img" 
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';

const Herobanner = () => {
  const [background, setBackground] = useState("")
  
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const{ url }  = useSelector((state)=>state.home)
  const {data,loading}=useFetch("/movie/upcoming")
  useEffect(()=>{ 
     const bg =  url.backdrop + 
      data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
     setBackground(bg)
  },[data])
const searchQueryHandler = (e)=>{
  if(e.key === "Enter" && query.length >0){
      navigate(`/search/${query}`)
  }
}
  return (
    <div className='heroBanner'>
      {! loading && <div className='backdrop-img'>
        <img src={background} alt="" />
      </div>}
        <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'>Go, <br /> beyond your imagination</span>
          <span className='subTitle'>
            Millions of movies,Tv shows and people to discover. <br />
            Explore now
          </span>
          {/* <div className='searchInput'>

          <input type="text" placeholder='Search for a movie or a tv show'
          onChange={(e)=>setQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          />  
           
          <button>Search</button>
          </div> */}
        </div>
      </ContentWrapper>

    </div>
  )
}

export default Herobanner