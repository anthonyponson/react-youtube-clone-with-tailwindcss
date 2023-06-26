import React, { useState } from 'react'
import { SideBarItems } from '../static/data'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserVideoBar = () => {
  const showSidebar = useSelector((state) => state.userInfo.NonshowSidebar)
  const [active, setActive] = useState('Home')

  return (
    <>
      <div
        className={`scrollbar w-52 bg-black h-[calc(100vh-53px)] mt-14 fixed top-0 left-0 text-white p-3 overflow-scroll z-50 nav-menu ${
          showSidebar ? 'active' : ''
        }`}
      >
        {/* topitems */}
        <div className='mb-4 space-y-2'>
          {SideBarItems.Top.map((item, index) => {
            return (
              <Link to={item.path}>
                <div
                  key={index}
                  className={`h-8 space-x-4  flex justify-start items-center px-3 rounded-xl 
                       cursor-pointer hover:bg-light_black my-1 ${
                         item.name === active ? 'bg-light_black' : 'bg-black'
                       }`}
                  onClick={() => setActive(item.name)}
                >
                  <span className=''>{item.icon}</span>
                  <p className=''>{item.name}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <hr className='text-light_black my-2' />

        {/* middleitems */}

        <div className='mb-4 space-y-2'>
          {SideBarItems.Middle.map((item, index) => {
            return (
              <Link to={item.path}>
                <div
                  key={index}
                  className={`h-8 space-x-4  flex justify-start items-center px-3 rounded-xl 
                       cursor-pointer hover:bg-light_black my-1 
                       ${item.name === active ? 'bg-light_black' : 'bg-black'}`}
                  onClick={() => setActive(item.name)}
                >
                  <span className=''>{item.icon}</span>
                  <p className=''>{item.name}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <hr className='text-light_black my-2' />

        {/* bottom items */}

        <div className='mb-4 space-y-2'>
          <h2 className=''>Explore</h2>
          {SideBarItems.Bottom.map((item, index) => {
            return (
              <div
                key={index}
                className={`h-8 space-x-4  flex justify-start items-center px-3 rounded-xl 
                       cursor-pointer hover:bg-light_black my-1 
                       ${item.name === active ? 'bg-light_black' : 'bg-black'}`}
                onClick={() => setActive(item.name)}
              >
                <span className=''>{item.icon}</span>
                <p className=''>{item.name}</p>
              </div>
            )
          })}
        </div>
        {/* <hr className='text-light_black my-2' /> */}
      </div>
    </>
  )
}

export default UserVideoBar
