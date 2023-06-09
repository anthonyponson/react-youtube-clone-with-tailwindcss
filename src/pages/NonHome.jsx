import { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/SideBars'
import { stateContext } from '../Context'
import { CategoryItems } from '../static/data'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { Link, useLocation } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlicer'
import NonSidebar from '../components/NonSidebar'
import Video from '../components/Video'

const Home = () => {
  const [videos, setVideos] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const category = searchParams.get('category')
    if (category && CategoryItems.includes(category)) {
      setSelectedCategory(category)
    } else {
      setSelectedCategory('All')
    }
  }, [location.search])

  useEffect(() => {
    let q = query(collection(db, 'videos'))
    if (selectedCategory !== 'All') {
      q = query(collection(db, 'videos'), where('category', '==', selectedCategory))
    }
    const unsubscribe = onSnapshot(q, (snapShot) => {
      setVideos(
        snapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    })
    return unsubscribe
  }, [selectedCategory])



  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <NonSidebar />

      <div className='ml-[0] md:ml-[19%] mx-auto bg-pitch_black pt-16'>
        <div className='flex flex-row items-center space-x-2 overflow-x-scroll relative scrollbar-hide'>
          {CategoryItems.map((item, index) => (
            <button
              className={`scrollbar text-white px-2 py-1 whitespace-nowrap break-keep rounded-lg ${
                selectedCategory === item ? 'bg-light_black_1' : 'bg-dark_black_1'
              }`}
              key={index}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className='pt-12 px-5 flex flex-col gap-x-3 gap-y-8 smd:flex-row smd:flex-wrap'>
          {videos.length === 0 ? (
            <div className='h-[86vh]'></div>
          ) : (
            videos.map((video, index) => (
              <Link to={`/nonvideo/${video.id}`} key={index}>
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