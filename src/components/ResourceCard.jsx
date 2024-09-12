import React from 'react'
import { Link } from 'react-router-dom';
import BlogImage from '../assets/images/BlogImage.svg'

const ResourceCard = ({resources}) => {
    
    return (
        <div className=' '>
            {resources.length > 0 ? (
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {
                    resources.map((resource) => <Link key={resource.originalUrl} href={resource.originalUrl} target="_blank" rel="noopener noreferrer"
                    className='p-5 shadow-lg rounded cursor-pointer'>
                        <div>
                            {resource.images && Array.isArray(resource.images) && resource.images.length > 0 ? (
                                <img src={resource.images[0].url} alt={resource.title || 'Blog Image'} className='max-w-sm object-scale-down' />
                            ) : (
                                <img src={BlogImage} alt='Resource Image' className='max-w-sm object-scale-down' />
                            )}
                        </div>                   
                        <h3 className="mt-4 mb-2 font-bold hover:text-blue-400 cursor-pointer">
                            {resource.title}
                        </h3>
                        <p className="mb-2 text-sm text-gray-600">
                            
                            {resource.excerpt}
                        </p>
                        <p className='text-sm text-gray-500'>
                            Published: {resource.publishedDateTime}                            
                        </p>
                        <p className='text-sm text-gray-500'>
                                Source: {resource.provider.domain}
                        </p>
                    </Link>)
            }

        </div>
        ) : (
            <p>No resources found for this topic.</p>
        )}
        </div>
        );
        }

export default ResourceCard