import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,totalCost,remainig}) => {
      console.log(bookmarks);
      return (
            <div className='bg-white h-[400px] p-3 rounded-xl mt-8 lg:w-1/4 sm:w-full md:w-1/4'>
                  <h2 className='text-1xl font-bold text-sky-400'>Credit Hour Remaining {remainig} hr </h2>
                  <hr className='mt-5 mb-5'/>
                  <h2 className='text-1xl font-semibold mb-4'>Course Name</h2>
                  {
                        bookmarks.map((bookmark,idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                  }
                  <hr className='mt-10 mb-5'/>
                  <h2>Total Credit Hour :{totalCost}</h2>
                  <hr className='mt-5 mb-6'/>
                  <h2>Total Price : USD</h2>
            </div>
      );
};

Bookmarks.propTypes = {
      bookmarks: PropTypes.array
};

export default Bookmarks;