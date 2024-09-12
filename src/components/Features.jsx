import React from 'react'
import newsIcon4 from '../assets/images/newsIcon4.svg'

const Features = () => {
  return (
    <div >
        <div className='bg-secondary py-16'>
            <div className='container mx-auto'>
            <button className='bg-[#333333] text-white/90 text-sm p-2'>
                Unlock the Power of
            </button>
            <h1 className='text-4xl pt-2'>
                FutureTech Features
            </h1>
            </div>            
        </div>
        <div>
                <div className='container mx-auto'>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <div className='border-accent border-r-2 border-opacity-15 py-32 pr-16'>
                    <img src={newsIcon4} alt='news icon' className='w-10 h-10'/>
                    <h3 className='pt-8 text-2xl'>
                        Future Technology Blog
                    </h3>
                    
                    <p className='pt-2 text-accent text-sm'>
                    Stay informed with our blog section dedicated to future technology.
                    </p>
                    </div>
                    </div>
                    <div className='grid grid-cols-2 gap-8 pl-12'>
                        <div className='bg-secondary p-8 rounded-lg'>
                            <h3 className='text-white/90'>
                            Quantity
                            </h3>
                            <p className='text-sm text-accent pt-2'>
                            Over 1,000 articles on emerging tech trends and breakthroughs.
                            </p>
                        </div>
                        <div className='bg-secondary p-8 rounded-lg'>
                            <h3 className='text-white/90'>
                            Variety
                            </h3>
                            <p className='text-sm text-accent pt-2'>
                            Articles cover fields like AI, robotics, biotechnology, and more.
                            </p>
                        </div>
                        <div className='bg-secondary p-8 rounded-lg'>
                            <h3 className='text-white/90'>
                            Frequency
                            </h3>
                            <p className='text-sm text-accent pt-2'>
                            Fresh content added daily to keep you up to date.
                            </p>
                        </div>
                        <div className='bg-secondary p-8 rounded-lg'>
                            <h3 className='text-white/90'>
                            Authoritative
                            </h3>
                            <p className='text-sm text-accent pt-2'>
                            Written by our team of tech experts and industry professionals.
                            </p>
                        </div>
                    </div>            
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Features