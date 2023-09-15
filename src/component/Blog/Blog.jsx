import React from 'react';
import { BsBook } from "@react-icons/all-files/bs/BsBook";
import PropTypes from 'prop-types';

const Blog = ({blog,handleBookmark}) => {
      const {id,img,title,description,price,credit}= blog
      return (
            <div className='w-[300px] h-[330] border-orange-500 border-2 mb-4 rounded-xl p-3 bg-white '>
                  <img src={img} alt="" />
                  <h2 className='text-1xl font-semibold mt-2 mb-2'>{title}</h2>
                  <p>{description}</p>
                  <div className='flex justify-between mt-3'>
                        <p className='font-semibold'>$ Price: {price}</p>
                        
                       <div className='flex justify-start items-start gap-2'>
                       <BsBook/>
                       <p className='font-semibold'>Credit : {credit} <span>hr</span></p>
                       </div>
                  </div>
                  <div className='text-center mt-3'>
                  <button onClick={() => handleBookmark(blog)} className='bg-sky-500 py-2 px-8 text-white rounded-xl '>Select</button>
                  
                  </div>
                  
            </div>
      );
};

Blog.propTypes = {
      blog:PropTypes.object
};

export default Blog;