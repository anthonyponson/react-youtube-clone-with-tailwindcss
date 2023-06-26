import React, { useState, useEffect, useRef } from 'react'
import { HiOutlineBars3, HiMagnifyingGlass } from 'react-icons/hi2'
import { BiVideoPlus } from 'react-icons/bi'
import { FaRegBell } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, getUser, toggleSidebar, logout } from '../slices/userSlicer'

const Navbar = () => {
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('users'))
    console.log(storedUser)
    if (storedUser) {
      dispatch(setUser(storedUser))
    }
  }, [])
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const navigate = useNavigate()

  const [showPopup, setShowPopup] = useState(false)
  const popupRef = useRef(null)

  const handleLogin = async () => {
    const response = await signInWithPopup(auth, provider)
    dispatch(setUser(response.user))
    localStorage.setItem('users', JSON.stringify(response.user))
    navigate('/home')
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [popupRef])

  return (
    <>
      {/* navbar container */}
      <div className='container flex items-center justify-between fixed mx-auto max-w-full z-50 bg-black h-14 '>
        {/* menu and logo */}
        <div className='flex justify-between items-center'>
          {/* navmenu */}
          <div
            className={`menu-bars text-white p-2 w-10 text-2xl text-center rounded-xl cursor-pointer hover:bg-light_black`}
          >
            <HiOutlineBars3 onClick={() => dispatch(toggleSidebar())} />
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
            {!user ? (
              <button
                className='bg-yt_red px-2 py-1 text-white rounded-md font-semibold text-sm'
                onClick={handleLogin}
              >
                Sign In
              </button>
            ) : (
              <img
                src={user.photoURL}
                alt={user.displayName}
                onClick={() => setShowPopup(true)}
                className='object-contain rounded-full cursor-pointer w-10 h-10'
                ref={popupRef}
              />
            )}

            {showPopup && (
              <div className='absolute right-2 mt-44 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10'>
                <img
                  className='rounded-full h-10 w-10 ml-2 mt-2'
                  src={user.photoURL}
                  alt=''
                />
                <h2 className='ml-4 mt-4'>{user.displayName}</h2>

                <Link
                  to='/'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Your channel
                </Link>
                <Link
                  to='/'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  YouTube Studio
                </Link>
                <button
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                  onClick={() => {
                    dispatch(logout())
                    navigate('/')
                    setShowPopup(false)
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* sidebar */}
    </>
  )
}

export default Navbar
