import React from 'react'
import {Link} from "react-router-dom"
export const Singup = () => {
  return (
    <div className='mt-20 min-h-screen flex justify-center items-center w-full'>
<div className='bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]'>
<h1 className='text-2xl font-bold text-center mb-4 '>
Let's Connect!
</h1>
<form action="">
  {/* for username */}
  <div className='mb-4'>
    <label htmlFor="username" className='block text-sm font-medium text-gray-700 mb-2'>username</label>
    <input type="text" name='name' id='name ' placeholder='enter your name' className='shadow-md focus:outline-none w-full px-3 py-2 rounded-md border border-grey-200 focus:ring-black focus:border-black' />

  </div>
  {/* for email */}
  <div className='mb-4'>
    <label htmlFor="email" className='block text-sm font-medium text-gray-700 1my-2'>Email</label>
    <input type="email" name='email' id='email ' placeholder='enter your email' className='shadow-md w-full px-3 py-2 rounded-md  focus:outline-none border border-grey-200 focus:ring-black focus:border-black' />

  </div>
  {/* for password */}
  <div className='mb-4'>
    <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
    <input type="password" name='password' id='password ' placeholder='enter your password' className='shadow-md focus:outline-none w-full px-3 py-2 rounded-md border border-grey-200 focus:ring-black focus:border-black' />

  </div>
  {/* for account selection */}
  <div className='mb-4'>
    <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Select yout account</label>
<select className='shadow-md focus:outline-none w-full px-3 py-2 rounded-md border border-grey-200 focus:ring-black focus:border-black'>
  <option value="buyer" className=' focus:outline-none'>Buyer</option>
  <option value="seller" className=' focus:outline-none'>Seller</option>
</select>
  </div>
  
  <div className='flex justify-end items-center'>
    

<label htmlFor="password" className='block text-xs font-medium text-gray-700 mb-2'> Have an Account? <Link to="/login" className="text-blue-400" >Signin</Link></label>
</div>
  
</form> 
<div className='flex items-center justify-center mt-5'>

<button
    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:text-blue-400 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-xl"
    type="button">
    Signup
  </button>
</div>
</div>
    </div>
  )
}
