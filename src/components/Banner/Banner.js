import React, { useEffect, useState } from 'react'
import {API_key,imageURL}  from '../../constants/Constans'
import axios  from '../../Axios'
import "./Banner.css"



function Banner() {
  const [movie, setmovie] = useState()  
   useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
      console.log(response.data); 
     setmovie(response.data.results[0])   
    })

   }, [])
   
    return (
        <div 
        style={{backgroundImage:`url(${movie? imageURL+movie.backdrop_path :""}) `}} className='Banner'>
            <div className='content'>
                <h1 className='tittle'>{movie? movie.name :""}</h1>
                <div className='Banner_button'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'> {movie? movie.overview :""}</h1>
            </div>
            <div className="fade">
                
            </div>
        </div>
    )
}

export default Banner