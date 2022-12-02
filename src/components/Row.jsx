import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaHeart , FaRegHeart } from 'react-icons/fa'
import Movie from './Movie'

const Row = ({title , fetchURL}) => {

    const [movies , setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])

  return (
    <>
        <h2 className='text-white p-4 md:p-8 font-bold md:text-xl'>{title}</h2>
        <div className='overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide flex items-center relative p-4 md:p-8'>
            <div className='flex ' id={'slider'}> 
            {movies.map((movie , id) =>(
              <Movie movie={movie} key={movie?.id} />
                 
            ))}
             </div>
        </div>
    </>
  )
}

export default Row