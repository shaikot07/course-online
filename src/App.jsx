
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/header/Header'
// tost 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setBookmarks]=useState([])
  // const [remaining,setRemaining]=useState([])
  const [selectedBlog, setSelectedBlog]= useState([])
  const [totalCost,setTotalCost] = useState(0)
  const [remainig,setRemainig] =useState(0)

  const handleBookmark =(blog) =>{
    const isExist= selectedBlog.find((item)=>item.id==blog.id)
    let cost = blog.credit;
    if(isExist){
      return toast("Already selected!",{position:toast.POSITION.TOP_CENTER
      })
    }else{
      selectedBlog.forEach((item)=>{
        cost=cost +item.credit;
      })
    }
    const remaining=20-cost;
    if(cost > 20){
      return toast('Crouse your Credit limit',{position:toast.POSITION.TOP_CENTER
      })
    }else{
      setRemainig(remaining)
    }
    setTotalCost(cost)
    setSelectedBlog([...selectedBlog,blog])
   setBookmarks([...bookmarks,{blog}])
  }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-7xl lg:mx-auto gap-4 bg-[#F3F3F3] md:mx-8'>
     <Blogs
     handleBookmark={handleBookmark}
     ></Blogs>
     <Bookmarks bookmarks={bookmarks}
     totalCost={totalCost}
     remainig={remainig}
     ></Bookmarks>
     </div>
      <ToastContainer></ToastContainer>
     
    </>
  )
}

export default App
