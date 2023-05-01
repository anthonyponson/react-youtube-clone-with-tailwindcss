import React, { useState, useContext } from 'react'
import { HiOutlineBars3, HiMagnifyingGlass } from 'react-icons/hi2'
import { BiVideoPlus } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa'
import { SideBarItems } from '../static/data'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Sidebar from './SideBars'
import { stateContext } from '../Context'


const Navbar = () => {
  const { state, dispatch } = useContext(stateContext);
  const showSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
    dispatch({ type: 'TOGGLE_SHOW_SIDEBAR' });
  }

  return (
    <>
      {/* navbar container */}
      <div className='container relative mx-auto max-w-full bg-black h-14 flex items-center justify-between'>
        {/* menu and logo */}
        <div className='flex justify-between items-center'>
          {/* navmenu */}
          <div
            className={`menu-bars text-white p-2 w-10 text-2xl text-center rounded-xl cursor-pointer hover:bg-light_black`}
          >
            <HiOutlineBars3 onClick={showSidebar} />
          </div>
          {/* logo */}
          <div className='py-5 w-28'>
            <Link to={'/'}>
              <img src={logo} alt='' />
            </Link>
          </div>
        </div>

        {/* search form */}
        <div className='flex flex-row items-center flex-1 smd:justify-center'>
          {/* search bar */}
          <div
            className='w-2/4 bg-black border-2 border-light_black items-center rounded-s-full h-10 hidden
           smd:block smd:flex smd:items-center'
          >
            <input
              type='text'
              placeholder='search'
              className='w-full h-6 mx-6 bg-black rounded-full items-center text-white text-start focus:outline-none 
              pl-4'
            />
          </div>
          {/* searchIcon */}
          <button className='px-2 py-0.5 rounded-full hover:bg-light_black smd:rounded-l-3xl smd:h-10 smd:border smd:border-light_black smd:bg-light_black_1 '>
            <HiMagnifyingGlass
              size={22}
              className='text-white inline-block tetx-center font-thin'
            />
          </button>
          {/* microphoe */}
          <div className='relative hidden rounded-full items-center justify-center h-10 w-10 ml-3 hover:bg-light_black smd:block'>
            <FaMicrophone
              className='absolute top-3 left-3'
              size={18}
              color='white'
            />
          </div>
        </div>

        {/* video bell user */}

        <div className='flex items-center'>
          <div className='flex items-center justify-center hover:rounded-full w-10 h-10 hover:bg-light_black'>
            <BiVideoPlus size={26} className='text-white' />
          </div>

          <div className='hidden items-center justify-center hover:rounded-full w-10 h-10 hover:bg-light_black smd:flex smd:block'>
            <FaRegBell size={22} className='text-white' />
          </div>

          <div className='max-w-fit pr-2 flex items-center cursor-pointer'>
            <button className='bg-yt_red px-2 py-1 text-white rounded-md font-semibold text-sm'>Sign In</button>
          </div>
        </div>
      </div>

      {/* sidebar */}
      

      

    </>
  )
}

export default Navbar