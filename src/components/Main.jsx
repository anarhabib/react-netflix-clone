import React from 'react'
import requests from '../Request'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Main = () => {
     const [movies , setMovies] = useState([])

     const movie = movies[Math.floor(Math.random() * movies.length)]

     useEffect(()=>{
       axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results)
       })

     },[])

    //  console.log(movie);

  return (
    <div className='w-full h-[550px]'>
        <div className="w-full h-full">
            <div className="w-full h-[550px] bg-gradient-to-r from-black absolute"></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
        <div className=' absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl text-white font-bold'>{movie?.title}</h1>
            <div className='my-6'>
                <button className='border bg-gray-300 border-gray-300 font-bold px-5 py-2 hover:scale-[.95] transition-all transition-duration-75'>Play</button>
                <button className='border text-white font-bold border-gray-300 px-5 py-2 ml-4 hover:scale-[.95] transition-all transition-duration-75'>Watch Later</button>
            </div>
                <p className='text-gray-400'>Released: {movie?.release_date}</p>
                <p className='text-gray-200 w-full md:max-w-[75%] lg:max-w-[50%] xl:max-w-[35%] mt-2'>{movie?.overview}</p>
        </div>
    </div>
  )
}

export default Main