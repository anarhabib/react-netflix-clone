import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 md:p-8 absolute w-full z-[100]'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div className="btns">
            <button className='text-white mr-4 font-bold'>Sign In</button>
            <button className='bg-red-600 text-white px-4 py-2 text-center rounded font-bold' >Sign Out</button>
        </div>
    </div>
  )
}

export default Navbar