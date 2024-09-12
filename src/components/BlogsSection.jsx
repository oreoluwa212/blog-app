import React from 'react'
import arrowIcon from '../assets/images/arrowIcon.svg';

const BlogsSection = () => {
  return (
    <div className='bg-secondary'>
        <div className='container mx-auto flex justify-between py-16'>
            <div className=''>
            <button className='bg-[#333333] text-white/90 text-sm p-2'>
                A Knowledge Treasure Trove
            </button>
            <h1 className='text-4xl pt-2'>
            Explore FutureTech's In-Depth Blog Posts
            </h1>
            
            </div>
            <div className='mr-8 pr-8'>
            <button className='text-accent text-sm bg-secondary border-accent mt-6 p-2 rounded-lg border-[0.2px] cursor-pointer'>
                View All Blogs 
                <span className='inline-flex ml-2'><img src={arrowIcon} alt='arrow icon' className='w-3 h-3'/></span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default BlogsSection