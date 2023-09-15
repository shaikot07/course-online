import React from 'react';
import PropTypes from 'prop-types';

const Bookmark =({bookmark}) => {
      
      return (
            <div className='p-2 '>
                  
                 <ul className='list-decimal'>
                  <li>{bookmark.blog.title}</li>
                 </ul>
            </div>
      );
};

Bookmark.propTypes = {
      bookmark:PropTypes.object
};

export default Bookmark;