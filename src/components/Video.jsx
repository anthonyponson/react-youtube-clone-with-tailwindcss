import React from 'react'
import check from '../assets/check.png'
import { HiCheckCircle } from 'react-icons/hi'

const Video = ({
  thumbnail,
  duration,
  views,
  channel,
  name,
  subscribers,
  uploadTime,
  logo,
}) => {
  return (
    <>
      <div className='flex flex-col space-y-1 max-w-[260px] cursor-pointer'>
        <div className='relative w-full'>
          <img
            src={thumbnail}
            alt=''
            className='h-full w-full overflow-hidden rounded-lg'
          />
          <p className='absolute right-2 top-[85%] px-1 text-xs bg-black text-white rounded'>
            {duration}
          </p>
        </div>
        <div className='flex mt-3 space-x-4'>
          <img src={logo} alt='' className='h-8 w-8 rounded-full' />
          <div className='ml-2'>
            <h2 className='video-title text-white font-semibold text-md items-center'>
              {name}
            </h2>
            <h3 className='flex item-center text-gray mt-1 text-sm'>
              {channel}
              <img
                src={check}
                alt=''
                className='ml-2 mt-1'
                style={{ width: '14px', height: '14px' }}
              />
            </h3>
            <p className="text-gray text-sm">{views} views . {uploadTime}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
