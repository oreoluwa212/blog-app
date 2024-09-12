
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CategorySection = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const ViewAllClick = () => { // A function to navigate to packages
      navigate('/categories'); 
    };
    return (
      <div className=' px-16 mb-5'>
        <div className='flex justify-between items-center'>

        <h1 className='text-xl lg:text-xl pt-4 leading-snug font-bold mb-5'>
          Category
        </h1>
        <button 
          onClick={ViewAllClick} //Calls the onClick function
          className="bg-secondary text-black px-6 my-8 py-3 rounded-lg shadow-md hover:bg-primary transition-all duration-300 easein"
        >
          View All
        </button>
        </div>
        <div className=" pb-8">
            <div className='grid grid-cols-4 gap-8'>
                <div className=''>
                    <h3 className="py-4 text-center font-bold bg-primary text-text mb-8 text-xl">FOOTBALL</h3>
                    <div>
                        <img src={football} className='' />
                    </div>
                </div>  
                
                <div className=''>    
                    <div>
                        <img src={basketball} className='' />
                    </div>              
                    <h3 className="py-4 text-center font-bold bg-primary text-text mt-8 text-xl">BASKETBALL</h3>
                                    
                </div> 

                <div className=''>
                    <h3 className="py-4 text-center font-bold bg-primary text-text mb-8 text-xl">CAR SPORT</h3>
                    <div>
                        <img src={sportcar} className='' />
                    </div>
                </div>  
                
                <div className=''>    
                    <div>
                        <img src={tabletennis} className='' />
                    </div>              
                    <h3 className="py-4 text-center font-bold bg-primary text-text mt-8 text-xl">TABLE TENNIS</h3>
                                    
                </div>          
                
            
            </div>           
        </div>
    </div>  
    )
  }
  
  export default CategorySection