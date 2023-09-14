
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  // const [remaining,setRemaining]=useState([])

  const handleBookmark =(blog) =>{
    console.log('click its',blog);
   setBookmarks([...bookmarks,{blog}])
  }

  return (
    <>
      
     <Header></Header>
     <div className='flex max-w-7xl mx-auto gap-4 bg-[#F3F3F3]'>
     <Blogs
     handleBookmark={handleBookmark}
     ></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      
     
    </>
  )
}

export default App
