import React, { useState } from 'react'
import { nonUserSideBarItems } from '../static/data'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const NonSidebar = () => {
  const showSidebar = useSelector((state) => state.userInfo.showSidebar)
  const [active, setActive] = useState('')


  return (
    <>
      <div
        className={`scrollbar w-52 bg-black h-[calc(100vh-53px)] mt-14 fixed top-0 left-0 text-white p-3 overflow-scroll z-50 nav-menu ${
          showSidebar ? 'active' : ''
        }`}
      >
        {/* topitems */}
        <div className='mb-4 space-y-2'>
          {nonUserSideBarItems.Top.map((item, i) => {
            return (
              <Link key={i} to={item.path}>
                <div
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
          {nonUserSideBarItems.Middle.map((item, i) => {
            return (
              <Link key={i} to={item.path}>
                <div
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

        <div className='mb-4 space-y-2'>
          {nonUserSideBarItems.SignIn.map((item, i) => {
            return (
              <Link key={i} to={item.path}>
                <div>
                  <h3 className='text-white text-sm px-2 pb-3'>
                    sign in to like comment subscribe
                  </h3>
                  <div
                    className={`h-10 w-32 space-x-4 flex justify-start items-center py-4 px-4 rounded-full border border-slate-100 cursor-pointer hover:bg-light_black my-1 ${
                      item.iocn === active ? 'bg-light_black' : 'bg-black'
                    }`}
                    onClick={() => setActive(item.iocn)}
                  >
                    <span className=''>{item.icon}</span>
                    <p className=''>{item.name}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <hr className='text-light_black my-2' />

        <div className='mb-4 space-y-2'>
          Explore
          {nonUserSideBarItems.Bottom.map((item, i) => {
            return (
              <Link key={i} to={item.path}>
                <div
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
      </div>
    </>
  )
}

export default NonSidebar
