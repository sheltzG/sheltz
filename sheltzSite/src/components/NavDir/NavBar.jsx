import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const NavBar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-5x1 ml-2'>Sheltz</h1>
      </div>

      {/* nav bar */}
      
      <ul className='hidden md:flex'>
        <li className='px-4 cursor-pointer capitalize py-6 font-medium text-gray-500 hover:scale-105 duration-200'>home</li>
        <li className='px-4 cursor-pointer capitalize py-6 font-medium text-gray-500 hover:scale-105 duration-200'>about</li>
        <li className='px-4 cursor-pointer capitalize py-6 font-medium text-gray-500 hover:scale-105 duration-200'>work</li>
        <li className='px-4 cursor-pointer capitalize py-6 font-medium text-gray-500 hover:scale-105 duration-200'>contact</li>
      </ul>

      <div onClick={()=> setNav(!nav)}
          className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-blue'>
        <li className='px-4 cursor-pointer capitalize py-6 text-4x1 text-gray-500'>home</li>
        <li className='px-4 cursor-pointer capitalize py-6 text-4x1 text-gray-500'>about</li>
        <li className='px-4 cursor-pointer capitalize py-6 text-4x1 text-gray-500'>work</li>
        <li className='px-4 cursor-pointer capitalize py-6 text-4x1 text-gray-500'>contact</li>
      </ul>
      )}


    </div>
  )
}

export default NavBar
