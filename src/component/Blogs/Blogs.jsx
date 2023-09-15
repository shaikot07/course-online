import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark}) => {
      const [blogs,setBlogs]=useState([]);
      useEffect(() =>{
            fetch('../../../public/data.json')
            .then(res =>res.json())
            .then(data => setBlogs(data))
      },[])
      return (
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-8 sm:gap-0 md:gap-3 lg:ml-0 sm:ml-15 lg:gap-4 '>
                 
                 {
                  blogs.map(blog => <Blog key={blog.id}
                         blog={blog}
                         handleBookmark={handleBookmark}
                         ></Blog>)
                 }
            </div>
      );
};

export default Blogs;