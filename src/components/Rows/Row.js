import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./Rows.css"
import axios from '../../Axios'
import { imageURL, API_key } from '../../constants/Constans'


function Row(props) {
  const [movie, setmovie] = useState([])
  const [youtubid, setyoutubId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setmovie(response.data.results)

    })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  function Handlemovie(id) {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_key}&language=en-US`).then((response) => {
      console.log(response.data);
      if (response.data.results.lenght !== 0) {
        setyoutubId(response.data.results[0])
      } 
    })
  }
  return (
    <div className='row'>
      <h2> {props.tittle}</h2>
      <div className="posts">
        {movie.map((obj) => {
          return (

            <img onClick={() => Handlemovie(obj.id)} className={props.small ? 'small' : 'image'} src={`${imageURL + obj.backdrop_path}`} alt="" />

          )
        })}

      </div>
      {youtubid && <YouTube video={opts} videoId={youtubid.key}/>}
    </div>
  )
}

export default Row