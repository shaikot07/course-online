import React from 'react';
import PropTypes from 'prop-types';

const Bookmark =({bookmark}) => {
      console.log(bookmark);
      
      return (
            <li className='list-decimal ml-3'>{bookmark.blog.title}</li>
      );
};

Bookmark.propTypes = {
      bookmark:PropTypes.object
};

export default Bookmark;