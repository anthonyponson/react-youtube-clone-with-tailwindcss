import { query } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Video = () => {
  const [videos, setVideos ] = useState([])
  const [comments , setComments] = useState([])
  const [data, setData] = useState(null)

  const {id} = useParams()

  const q = query

  if(id)
  return (
    <>
      <div className='flex flex-row h-full py-20 px-9 bg-black'>
        <div className='left flex-1'>
          <div className='flex justify-center'>
            <iframe
              src='https://www.youtube.com/embed/X7GZquTe0b8'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
