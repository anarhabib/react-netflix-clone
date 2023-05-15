import React, { useState , useEffect } from 'react'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const SavedMovies = () => {
    const [movies, setMovies] = useState([]);
    const { user }  = UserAuth();

    const slideLeft = ()=> {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = ()=> {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          
          setMovies(doc.data()?.savedMovies);
        });
      },[user?.email]);

     

    const movieRef = doc(db, 'users', `${user?.email}`)

    const deleteShow = async (passedID) => {
        try {
          const result = movies.filter((movie) => movie.id !== passedID)
          await updateDoc(movieRef, {
              savedMovies: result
          })
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
         <div className='relative flex items-center mt-8 p-4 md:p-8 group'>
           <MdChevronLeft
           onClick={slideLeft}
            className=' bg-white rounded-full absolute z-[1000] cursor-pointer left-0  opacity-50 hover:opacity-100 transition-all hidden group-hover:block ' size={'40px'}/>
            <div className='overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth' id={'slider'}> 
            {movies.map((movie) =>(
                  <div
                  className=" relative w-[160px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer mr-6"
                  key={movie?.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                    alt={movie?.title}
                  />
                  <div className="absolute left-0 top-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100 transition-all ">
                    <p className="text-xs md:text-sm font-bold flex items-center justify-center text-center h-full w-full truncate whitespace-pre-wrap p-4">
                      {movie?.title}
                    </p>
                    <p onClick={()=> deleteShow(movie.id)} className='absolute text-gray-300 top-2 right-2'><AiOutlineClose /></p>
                  </div>
                </div>
            ))}
             </div>
             <MdChevronRight
             onClick={slideRight}
              className=' bg-white rounded-full absolute right-0 cursor-pointer z-[1000]  opacity-50 hover:opacity-100 transition-all hidden group-hover:block' size={'40px'}/>
        </div>
    </>
  )
}

export default SavedMovies
