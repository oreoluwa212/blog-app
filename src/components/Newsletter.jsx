import React from 'react'
 
import { FaArrowRight, FaArrowUpRightDots, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  return (
    <div className='pb-8'>
      <div className='container mx-auto max-w-5xl mb-4'>
        <div className='flex justify-center items-center bg-secondary my-8'>
          <div className='pt-32 mx-8'>
          <h3 className='text-5xl pb-8'>NEWSLETTER SUBSCRIPTION</h3>
            <div className='flex justify-center items-center' >            
                <input placeholder='youremail123@gmail.com ' className='text-text h-12 border-text border-2 rounded-l pl-4 pr-32 py-2 bg-transparent'  />
                <button className='bg-primary h-12 px-6 py-3 text-black font-bold rounded-r'>
                    < FaArrowUpRightDots />
                </button>
            </div>
            </div>
            
        </div>
        <div className='flex justify-between'>
        <div className='flex gap-4 text-black'>
        <FaFacebookF className='w-10 h-10 bg-primary p-2'/>
        <FaInstagram className='w-10 h-10 bg-primary p-2'/>
        <FaTwitter className='w-10 h-10 bg-primary p-2' />
      </div>
      <div className='flex justify-center items-center gap-4'>
        <p className='text-lg font-bold'>Contact Us Here </p>
        <Link to="/contact" className='cursor-pointer'>
          <FaArrowRight className='w-16 h-10 bg-primary text-black px-4 py-2'/>
          </Link>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Newsletter