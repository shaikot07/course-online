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
            <div className='grid grid-cols-3 mt-8 gap-3 '>
                 
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