import React from 'react'
import { MdVideoLibrary } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import Sidebar from '../components/Sidebars'

function Fav() {
  return (
    <>
      <Sidebar />
      <div className='flex flex-col items-center justify-center pt-44  mx-auto'>
        <div className='text-white mx-auto'>
          <MdVideoLibrary size={100} />
        </div>

        <h3 className='text-lg text-white pt-6'>Enjoy your favorites videos</h3>
        <h3 className='text-lg text-white py-6'>

        </h3>

       
      </div>
    </>
  )
}

export default Fav
