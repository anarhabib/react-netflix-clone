import React, { useState } from 'react'
import { FaHeart , FaRegHeart } from 'react-icons/fa'


function Movie({movie , id}) {

    const [liked , setLiked] = useState(false)

  return (
    <div className=' relative w-[160px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer mr-6' key={movie?.id}>
    <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
    <div className='absolute left-0 top-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100 transition-all '>
        <p className='text-xs md:text-sm font-bold flex items-center justify-center text-center h-full w-full truncate whitespace-pre-wrap p-4'>{movie?.title}</p>
        <p>
            {liked ? <FaHeart className='absolute left-2 top-2 text-gary-300'/> : <FaRegHeart className='absolute left-2 top-2 text-white'/>}
        </p>
    </div>
</div>
  )
}

export default Movie