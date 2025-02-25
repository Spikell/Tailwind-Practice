import React from 'react'

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-[#FF4433]'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input 
          type='text' 
          placeholder='subscribe@nike.com' 
          className='w-full rounded-full px-5 py-3 outline-none text-slate-gray max-sm:text-center' 
        />
        <div className='flex w-full justify-end max-sm:justify-end items-center max-sm:w-full'>
          <button 
            className='flex justify-center items-center rounded-full px-7 py-4 border font-montserrat 
              text-white text-lg leading-none border-[#FF4433] bg-[#FF4433] hover:bg-black duration-300'
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
} 

export default Subscribe
