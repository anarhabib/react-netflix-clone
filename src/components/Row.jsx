import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft , MdChevronRight } from 'react-icons/md'



const Row = ({title , fetchURL , RowID}) => {

    const [movies , setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])

    const slideLeft = ()=> {
        var slider = document.getElementById('slider' + RowID)
        slider.scrollLeft = slider.scrollLeft -500;
    }
    const slideRight = ()=> {
        var slider = document.getElementById('slider' + RowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <h2 className='text-white p-4 md:p-8 font-bold md:text-xl'>{title}</h2>
        <div className='relative flex items-center  p-4 md:p-8 group'>
           <MdChevronLeft
           onClick={slideLeft}
            className=' bg-white rounded-full absolute z-[1000] cursor-pointer left-0  opacity-50 hover:opacity-100 transition-all hidden group-hover:block ' size={'40px'}/>
            <div className='overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth' id={'slider' + RowID}> 
            {movies.map((movie , id) =>(
              <Movie movie={movie} key={id} />
            ))}
             </div>
             <MdChevronRight
             onClick={slideRight}
              className=' bg-white rounded-full absolute right-0 cursor-pointer z-[1000]  opacity-50 hover:opacity-100 transition-all hidden group-hover:block' size={'40px'}/>
        </div>
    </>
  )
}

export default Row