import React from 'react'
import NonSidebar from '../components/NonSidebar'
import { MdVideoLibrary } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

function NonFav() {
  return (
    <>
      <NonSidebar />
      <div className='flex flex-col items-center justify-center pt-44  mx-auto'>
        <div className='text-white mx-auto'>
          <MdVideoLibrary size={100} />
        </div>

        <h3 className='text-lg text-white pt-6'>Enjoy your favorites videos</h3>
        <h3 className='text-lg text-white py-6'>
          Sign in to access videos that you have liked
        </h3>

        <div className='flex px-4 py-3 space-x-2 rounded-full border border-neutral-50'>
          <FaUser className='text-white text-xl'/>
          <h2 className='text-neutral-50 text-base'>sign in</h2>
        </div>
      </div>
    </>
  )
}

export default NonFav
