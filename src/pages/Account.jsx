import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
  <>
  <div className='w-full h-full '>
          <img
            className=" w-full h-[400px] object-cover "
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/68c1b94a-de06-4de9-a958-1d4e5d804c4f/AZ-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt=""
          />
          <div className='bg-black/60 fixed left-0 top-0 w-full h-[400px]'></div>
          <h1 className='absolute top-[20%] text-3xl text-white p-4 md:p-8 font-bold'>My Movies</h1>
      </div>
      <SavedMovies/>
  </>
  )
}

export default Account