


import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([])

  const handleBookmark =() =>{
    console.log('click');
  }

  return (
    <>
      
     <Header></Header>
     <div className='flex max-w-7xl mx-auto gap-4'>
     <Blogs
     handleBookmark={handleBookmark}
     ></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      
     
    </>
  )
}

export default App
