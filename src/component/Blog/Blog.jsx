import React from 'react';
import { FiBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({blog,handleBookmark}) => {
      const {id,img,title,description,price,credit}= blog
      return (
            <div className='w-[280px] h-[330] border-orange-500 border-2 mb-4 rounded-xl p-3 '>
                  <img src={img} alt="" />
                  <h2 className='text-1xl font-semibold mt-2 mb-2'>{title}</h2>
                  <p>{description}</p>
                  <div className='flex justify-between mt-3'>
                        <p className='font-semibold'>$ Price: {price}</p>
                        <p className='font-semibold'><span><FiBookOpen/></span> Credit : {credit} <span>hr</span></p>
                  </div>
                  <div className='text-center mt-3'>
                  <button className='bg-sky-500 py-2 px-8 text-white rounded-xl '>Select</button>
                  </div>
            </div>
      );
};

Blog.propTypes = {
      blog:PropTypes.object
};

export default Blog;