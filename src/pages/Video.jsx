import { addDoc, collection, doc, onSnapshot, query } from 'firebase/firestore'
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { auth, db, timestamp } from '../firebase'
import { BiLike, BiDislike } from 'react-icons/bi'
import { RiShareForwardFill } from 'react-icons/ri'
import { FaDonate } from 'react-icons/fa'
import { HiDotsHorizontal } from 'react-icons/hi'
import { MdOutlineSort } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setUser } from '../slices/userSlicer'
import { onAuthStateChanged } from 'firebase/auth'
import Comment from '../components/Comments'
import { CategoryItems } from '../static/data'
import { Link } from 'react-router-dom'

const Video = () => {
  const [videos, setVideos] = useState([])

  const [comments, setComments] = useState([])
  const [data, setData] = useState(null)
  const [comment, setComment] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { id } = useParams()
  const location = useLocation()
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  const [count, setCount] = useState(
    parseInt(localStorage.getItem('count')) || 34
  )
  const [discount, setDiscount] = useState(
    parseInt(localStorage.getItem('discount')) || 0
  )

  const handleLikeClick = () => {
    setCount(count + 1)
  }

  const handleDisLikeClick = () => {
    setDiscount(discount + 1)
  }

  useEffect(() => {
    localStorage.setItem('count', count)
    localStorage.setItem('discount', discount)
  }, [count, discount])

  const q = query

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const filteredVideos =
    selectedCategory !== null
      ? videos.filter((video) => video.category === selectedCategory)
      : videos.filter((video) => video.id === id || video.category === data?.category)


  // useEffect to fetch video details from database
  useEffect(() => {
    let q = query(collection(db, 'videos'))

    const unsubscribe = onSnapshot(q, (snapShot) => {
      setVideos(
        snapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    })
    return unsubscribe
  }, [])

  // useEffect to fetch video details for the selected video
  useEffect(() => {
    if (id) {
      const q = query(doc(db, 'videos', id))
      onSnapshot(q, (snapShot) => {
        setData(snapShot.data())
      })

      const commentQuery = query(collection(db, 'videos', id, 'comments'))
      onSnapshot(commentQuery, (snapShot) => {
        setComments(
          snapShot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      })
    }
  }, [id])

  // prevent user logout after logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [])

  // add comment to database
  const addComment = async (e) => {
    e.preventDefault()
    const commentData = {
      image: user.photoURL,
      name: user.displayName,
      comment,
      uploaded: timestamp,
    }
    if (id) {
      await addDoc(collection(db, 'videos', id, 'comments'), commentData)
      setComment('')
    }
  }

  return (
    <>
      <div className='flex flex-col py-10 px-4  bg-black md:space-x-4 md:flex-row md:py-20 md:px-9'>
      <div className='md:flex-1'>
          <div className='flex justify-center'>
            <iframe
              className='w-full h-[300px] md:h-[550px] rounded-lg'
              src={`https://www.youtube.com/embed/${data?.link}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <h2 className='text-white mt-3 mb-1 font-medium text-lg'>
            {data?.name}
          </h2>

          <div className='flex flex-col md:flex-row md:justify-between mt-2'>
            {/* channel detail */}
            <div className='flex items-center'>
              <img
                src={data?.logo}
                alt={data?.channel}
                className='rounded-full w-10 h-10'
              />

              <div className='flex flex-col ml-2'>
                <h3 className='text-white font-semibold text-base'>
                  {data?.channel && data?.channel.length <= 25
                    ? data?.channel
                    : `${data?.channel && data?.channel.substr(0, 20)}...`}
                </h3>

                <button className='text-sm  text-gray'>
                  {data?.subscribers} Subscribers
                </button>
              </div>

              <div className='flex ml-auto md:ml-6'>
                <button className='text-black bg-white px-2 py-1 rounded-full font-semibold text-sm'>
                  Subscribe
                </button>
              </div>
            </div>

            {/* icons */}
            <div className='flex items-center mt-2 flex-wrap'>
              <div className='flex bg-light_black items-center rounded-full h-10 mx-1 hover:bg-light_1'>
                <div className='flex px-3 items-center border-r-2 border-r-light_black_1 cursor-pointer'>
                  <BiLike
                    type='button'
                    className='text-white text-2xl'
                    onClick={handleLikeClick}
                  />
                  <p className='text-white pl-2 pr-3 text-sm'>{count}</p>
                </div>

                <div className='cursor-pointer pl-4 pr-5'>
                  <BiDislike
                    className='text-2xl font-extralight text-white'
                    onClick={handleDisLikeClick}
                  />
                  <p className='text-white pl-2 pr-3 text-sm'>{discount}</p>
                </div>
              </div>

              <div className='flex items-center justify-center bg-light_black rounded-full cursor-pointer hover:bg-light_black_1 mt-2 md:mt-0 md:ml-2'>
                <div className='flex items-center cursor-pointer py-5 px-2'></div>
                <RiShareForwardFill className='text-white' />
                <p className='text-white pl-2 pr-3 text-sm font-semibold'>
                  share
                </p>
              </div>

              <div className='flex items-center justify-center bg-light_black rounded-full cursor-pointer hover:bg-light_black_1 mt-2 md:mt-0 md:ml-2'>
                <div className='flex items-center px-2 py-5 cursor-pointer'></div>
                <FaDonate className='text-white' />
                <p className='text-white pl-2 pr-3 text-sm font-semibold'>
                  Thanks
                </p>
              </div>

              <div className='flex items-center justify-center cursor-pointer rounded-full p-2 bg-light_black hover:bg-light_black_1 text-white mt-2 md:mt-0 md:ml-2'>
                <HiDotsHorizontal />
              </div>
            </div>
          </div>

          <div className='max-w-4xl bg-light_black mt-4 rounded-2xl px-4 py-2 text-sm'>
            <div className='flex p-2 space-x-2'>
              <p className='font-medium text-white'>{data?.views} views</p>
              <p className='font-medium text-gray'>{data?.uploadTime}</p>
            </div>
            <span className='text-white'>{data?.description}</span>
          </div>

          <div className='text-white mt-5'>
            <div className='flex item-center'>
              <h1>{comments.length} comments</h1>
              <div className='flex items-center mx-10 space-x-2'>
                <MdOutlineSort />
                <p>sort by</p>
              </div>
            </div>
            {user && (
              <form
                onSubmit={addComment}
                className='flex items-start w-[50%] pt-4'
              >
                <img
                  src={user?.photoURL}
                  alt='profile'
                  className='rounded-full mr-3 h-12 w-12'
                />
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type='text'
                  className='bg-transparent border-b w-full focus:outline-none'
                />
              </form>
            )}
          </div>
          <div className='mt-4'>
            {comments.map((item, i) => (
              <Comment key={i} {...item} />
            ))}
          </div>
        </div>

    {/* recommended videos */}
    <div className='md:w-1/3'>

    <div className='max-w-xs sm:max-w-md'>
            <div className='space-x-3 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
              {CategoryItems.map((item) => (
                <button
                  className={`text-white px-2 py-1 whitespace-nowrap break-keep rounded-lg ${
                    selectedCategory === item
                      ? 'bg-light_black_1'
                      : 'bg-dark_black_1'
                  }`}
                  key={item}
                  onClick={() => handleCategoryClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

      <div className='space-y-4'>
        {filteredVideos.map((video) => (
          <Link key={video.id} to={`/video/${video.id}`}>
            <div className='flex space-x-4'>
              <img
                src={video.thumbnail}
                alt={video.name}
                className='w-36 h-20 md:w-48 md:h-28 object-cover rounded-lg'
              />
              <div className='flex flex-col'>
                <h3 className='text-white font-medium text-base'>
                  {video.name}
                </h3>
                <p className='text-gray-400 text-sm'>
                  {video.channel} • {video.views} views • {video.uploaded}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</>
) }

export default Video
