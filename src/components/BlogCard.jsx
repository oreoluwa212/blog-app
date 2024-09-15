import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import BlogImage from '../assets/images/BlogImage.svg'

function BlogCard({blogs}) {  
    
    return (
        <div className=' '>
            {blogs.length > 0 ? (
                <div className='max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none'>
                {
                    blogs.map((blog) => <Link key={blog.originalUrl} href={blog.originalUrl} target="_blank" rel="noopener noreferrer"
                    className='p-5 shadow-lg rounded cursor-pointer'>
                        <div>
                            {blog.images && Array.isArray(blog.images) && blog.images.length > 0 ? (
                                <img src={blog.images[0].url} alt={blog.title || 'Blog Image'} 
                                    className='object-cover h-48 w-full' width="304" height="192" />
                            ) : (
                                <img src={BlogImage} alt='Blog Image' 
                                className='object-cover h-48 w-full' width="304" height="192" />
                            )}
                        </div>                   
                        <h3 className="mt-4 mb-2 font-bold hover:text-blue-400 cursor-pointer">
                            {blog.title}
                        </h3>
                        <p className="mb-2 text-sm text-gray-600">
                            <FaUser className="inline=flex items-center mr-2" />
                            {blog.author}
                        </p>
                        <p className='text-sm text-gray-500'>
                            Published: {blog.publishedDateTime}
                            <span className='inline-flex items-center'>
                                Source: {blog.provider.domain}
                            </span>
                        </p>
                    </Link>)
            }
        
        </div>
        ) : (
            <p>No blogs found for this topic.</p>
          )}
        </div>
    );
}

export default BlogCard;