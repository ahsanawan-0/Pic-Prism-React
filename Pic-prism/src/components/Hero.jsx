import React from 'react'
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='sm:w-[60vw] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center p-2'>
      <form className='absolute flex items-center justify-center'>
<input type="text" id='search' name='search ' className='py-3 px-7 w-[60vw] text-xl sm:text-2xl mx-auto outline-none border-b-2  bg-bgColor' placeholder='Search your assest'/>
<CiSearch className='text-3xl sm:text-4xl text-gray-400 -ml-12 '/>

      </form>
    </div>
  )
}

export default Hero;
