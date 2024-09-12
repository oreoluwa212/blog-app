import React from 'react'

const CategorySelection = ({onSelectCategory, selectedCategory, activeCategory}) => {
    

  return (
    <div className='px-4 mb-8 lg:space-x-16 flex-wrap items-center border-b-2 py-5 text-gray-500'>
        <button 
            onClick={() => onSelectCategory(null)}
            className={`lg:ml-12 ${activeCategory ? "" : "active-button"} `}>
            All
        </button>
        <div className="">
            <button 
                onClick={() => onSelectCategory('machine-learning')}
                className={`mr-2 space-x-16 ${selectedCategory === "Machine Learning" } ${activeCategory === 'machine-learning' ? "active-button" : "" }`}
                >
                   Machine Learning
            </button>
            <button 
                onClick={() => onSelectCategory("meta-ai")}
                className={`mr-2 space-x-16 ${selectedCategory === "Meta AI" } ${activeCategory === "meta-ai" ? "active-button" : "" }`}
                >
                   Meta AI
            </button>
            <button 
                onClick={() => onSelectCategory("ibm-ai")}
                className={`mr-2 space-x-16 ${selectedCategory === "IBM AI" } ${activeCategory === "ibm-ai" ? "active-button" : "" }`}
                >
                   IBM AI
            </button>
            <button 
                onClick={() => onSelectCategory("ai-in-robotics")}
                className={`mr-2 space-x-16 ${selectedCategory === "AI in Robotics" } ${activeCategory === "ai-in-robotics" ? "active-button" : "" }`}
                >
                   AI in Robotics
            </button>
            <button 
                onClick={() => onSelectCategory("ai-in-autos")}
                className={`mr-2 space-x-16 ${selectedCategory === "AI in Autos"  } ${activeCategory === "ai-in-autos" ? "active-button" : "" }`}
                >
                   AI in Autos
            </button>
            <button 
                onClick={() => onSelectCategory("ai-in-finance")}
                className={`mr-2 space-x-16  ${selectedCategory ===  " AI in Finance" } ${activeCategory === "ai-in-finance" ? "active-button" : "" }`}
                >
                   AI in Finance
            </button>
        </div>  
    </div>
  )
}

export default CategorySelection