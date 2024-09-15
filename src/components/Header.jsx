import React from 'react'
import usersContainer from '../assets/images/usersContainer.svg';
import arrowIcon from '../assets/images/arrowIcon.svg';
import newsIcon1 from '../assets/images/newsIcon1.svg';
import newsIcon2 from '../assets/images/newsIcon2.svg';
import newsIcon3 from '../assets/images/newsIcon3.svg';
import { FaCircleArrowUp, FaSquareArrowUpRight } from 'react-icons/fa6';

const Header = () => { 
  return (
    <div className=' border-accent border-b-[0.1px] border-opacity-15'>
    <div className='flex border-accent border-b-[0.1px] border-opacity-15'>
      <div className='border-accent'>
        <div className='border-accent border-b-[0.1px] border-opacity-15 pt-32 pb-16 pr-8'>
          <div className='ml-24'>
        <h3 className='text-accent text-2xl'>
        Your Journey to Tomorrow Begins Here
        </h3>
        <h1 className="font-bold text-5xl py-4">
        Explore the Frontiers of Artificial Intelligence
        </h1>
        <p className='text-accent text-sm'>
        Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
        </p>
        </div>
        </div>
        <div className='flex gap-8'>
          <div className='border-accent py-10 border-r-2 border-opacity-15 pr-24'>
            <div className='ml-24'>
            <p className='font-semibold text-4xl'>
            300<span className='text-primary'>+</span>
            </p>
            <p className='text-accent text-sm pt-2'>
            Resources available
            </p>
            </div>
          </div>
          <div className='border-accent py-10 border-r-2 border-opacity-15 pr-24'>
            <p className='font-semibold text-4xl'>
            12k<span className='text-primary'>+</span>
            </p>
            <p className='text-accent text-sm pt-2'>
            Total Downloads
            </p>
          </div>
          <div className='border-accent py-10 pr-24'>
            <p className='font-semibold text-4xl'>
            10k<span className='text-primary'>+</span>
            </p>
            <p className='text-accent text-sm pt-2'>
            Active Users
            </p>
          </div>
        </div>
      </div>
      <div className="border-accent  border-l-[0.1px] border-b-[0.1px] w-[65%]  border-opacity-15">          
        <div className='pl-12 relative pt-64'>
        <img src={usersContainer} alt="users" className='w-30 h-30 mb-4'/>
        <h3 className='text-lg pb-2'>
        Explore 1000+ resources
        </h3>
        <p className='text-accent text-sm'>
        Over 1,000 articles on emerging tech trends and breakthroughs.
        </p>
        <button className='text-accent text-sm bg-secondary border-accent mt-6 p-4 rounded-lg border-[0.2px] cursor-pointer'>
        Explore Resources 
        <span className='inline-flex ml-2'><img src={arrowIcon} alt='arrow icon' className='w-3 h-3'/></span>
        </button>
        </div>
      </div>
    </div>
    <div>
    <div className='flex gap-8'>
          <div className='border-accent py-8 flex justify-center items-center border-r-2 border-opacity-15 pr-16'>
            <div className='text-accent mr-8 ml-24'>
              <img src={newsIcon1} alt='news icon' className='w-8 h-8'/>
              <h3 className='text-white/90 pt-4'>
                Latest New Updates
              </h3>
              <p>
                Stay current
              </p>
              <p className='pt-6 text-sm'>
                Over 100 articles published monthly
              </p>
            </div>
            <div className='pl-8'>
            <FaCircleArrowUp className='w-8 h-8 rotate-45 text-primary'/>
            </div>
          </div>
          <div className='border-accent flex justify-center items-center border-r-2 border-opacity-15 pr-24'>
          <div className='text-accent mr-8'>
              <img src={newsIcon2} alt='news icon' className='w-8 h-8'/>
              <h3 className='text-white/90 pt-4'>
                Experts Contributors
              </h3>
              <p>
              Trusted Insights
              </p>
              <p className='pt-6 text-sm'>
              50+ renowned AI experts on our team
              </p>
            </div>
            <div className='pl-8'>
            <FaCircleArrowUp className='w-8 h-8 rotate-45 text-primary'/>
            </div>
          </div>
          <div className='border-accent flex justify-center items-center'>
          <div className='text-accent mr-8'>
              <img src={newsIcon3} alt='news icon' className='w-8 h-8'/>
              <h3 className='text-white/90 pt-4'>
                Global Readership
              </h3>
              <p>
              Worldwide Impact
              </p>
              <p className='pt-6 text-sm'>
              2 million monthly readers
              </p>
            </div>
            <div className='pl-8'>
              <FaCircleArrowUp className='w-8 h-8 rotate-45 text-primary'/>
            </div>
          </div>
        </div>
    </div>
    
    </div>
  )
}

export default Header