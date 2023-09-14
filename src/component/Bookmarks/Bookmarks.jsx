import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
      return (
            <div className='bg-white h-[400px] p-3 rounded-xl mt-8 w-1/4'>
                  <h2 className='text-2xl font-bold'>this is Bookmarks </h2>
                  <h4>selector:{bookmarks.length}</h4>
                  <h2 className='text-1xl font-semibold'>Course Name</h2>
                  {
                        bookmarks.map((bookmark,idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                  }
                  <hr className='mt-10'/>
                  <h2>Total Credit Hour :</h2>
                  <hr />
                  <h2>Total Price : USD</h2>
            </div>
      );
};

Bookmarks.propTypes = {
      bookmarks: PropTypes.array
};

export default Bookmarks;