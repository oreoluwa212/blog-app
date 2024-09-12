import React from 'react'
import image from '../assets/images/Image.svg';
import image1 from '../assets/images/Image1.svg';
import image2 from '../assets/images/image2.svg'
import { FaStar } from 'react-icons/fa6';

const Testimonials = () => {
  return (
    <div className='container mx-auto py-8'>
        <div className='pt-8'>
            <button className='bg-[#333333] text-white/90 text-sm p-2'>
                What Our Readers Say
            </button>
            <h1 className='text-4xl pt-2 pb-8'>
            Real Words from Readers
            </h1>
            
            </div>
            {/* <div className='mr-8 pr-8'>
            <button className='text-accent text-sm bg-secondary border-accent mt-6 p-2 rounded-lg border-[0.2px] cursor-pointer'>
                View All Blogs 
                <span className='inline-flex ml-2'><img src={arrowIcon} alt='arrow icon' className='w-3 h-3'/></span>
            </button>
            </div> */}
        <div className='grid grid-cols-3 mt-8 gap-12 '>
        <div className=' ' >
            <div className='flex justify-center items-center  mb-8 gap-4'>
                <div>
                    <img src={image1} alt='' className='w-12 h-12'/>
                </div>
                <div>
                <h3>
                    Alan Jackson
                </h3>
                <p className='text-sm text-accent'>
                    San Francisco, USA</p>
                </div>
            </div>
            <div className='bg-secondary  rounded-lg'>
            <div className='flex justify-center text-primary'>
                <FaStar className='w-4 h-4 '/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
            </div>
            <div className='p-8'>
            <p className='text-white/80 text-sm'>
            The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.
            </p>
            </div>
            </div>
        </div>
        <div>
            <div className='flex justify-center items-center mb-8 gap-4'>
            <div>
                    <img src={image2} alt='' className='w-12 h-12'/>
                </div>
                <div>
                <h3>
                    Emily Adams
                </h3>
                <p className='text-sm text-accent'>
                    London, UK
                </p>
                </div>
                
            </div>
            <div className='bg-secondary rounded-lg'>
            <div className='flex justify-center text-primary'>
                <FaStar className='w-4 h-4 '/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
            </div>
            <div className='p-8'>
            <p className='text-white/80 text-sm'>
            The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.
            </p>
            </div>
            </div>
        </div>
        <div>
            <div className='flex justify-center items-center mb-8 gap-4'>
            <div>
                    <img src={image} alt='' className='w-12 h-12'/>
                </div>
                <div>
                <h3>
                    Raj Patel
                </h3>
                <p className='text-sm text-accent'>
                    Mumbai, India</p>
                </div>
            </div>
            <div className='bg-secondary rounded-lg'>
            <div className='flex justify-center text-primary'>
                <FaStar className='w-4 h-4 '/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
                <FaStar className='w-4 h-4'/>
            </div>
                <div className='p-8'>
                <p className='text-white/80 text-sm'>
                The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.
                </p>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Testimonials