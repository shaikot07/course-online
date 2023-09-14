import React from 'react';
import PropTypes from 'prop-types';

const Bookmark =({bookmark}) => {
      
      return (
            <div className='p-2 '>
                  
                 <ol>
                  <li>{bookmark.blog.title}</li>
                 </ol>
            </div>
      );
};

Bookmark.propTypes = {
      bookmark:PropTypes.object
};

export default Bookmark;