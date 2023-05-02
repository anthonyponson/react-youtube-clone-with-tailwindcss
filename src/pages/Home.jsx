import { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/SideBars'
import { stateContext } from '../Context'
import { CategoryItems } from '../static/data'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { Link } from 'react-router-dom'
import Video from '../components/Video'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlicer'

const Home = () => {
  const [videos, setVideos] = useState([])
  const dispatch = useDispatch()
  console.log(videos)

  useEffect(() => {
    const q = query(collection(db, 'videos'))
    onSnapshot(q, (snapShot) => {
      setVideos(
        snapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    })
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user))
      }
      else{ 
        dispatch(setUser(null))
      }
    })
  },[])

  return (
    <>
      <Sidebar />

      <div className='w-[calc(100%-240px)] h-[calc(100%-53px)] pt-16 bg-pitch_black ml-60'>
        <div className='flex flex-row items-center space-x-2 overflow-x-scroll relative scrollbar-hide'>
          {CategoryItems.map((item, index) => (
            <h2
              className='scrollbar text-white px-2 py-1 whitespace-nowrap break-keep rounded-lg bg-light_black_1'
              key={index}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className='pt-12 px-5 grid grid-cols-grid gap-x-3 gap-y-8'>
          {videos.length === 0 ? (
            <div className='h-[86vh]'></div>
          ) : (
            
            videos.map((video, index) => (
              
              <Link to={`/video/${video.id}`} key={index}>
                <Video {...video} />
              </Link>
            ))
            
          )}
        </div>
      </div>
    </>
  )
}

export default Home
