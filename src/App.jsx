import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Navbar from './components/Navbar'
import NonHome from './pages/NonHome'
import HomeSignOutUser from './pages/NonVideo'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout, setUser } from './slices/userSlicer'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import NonVideo from './pages/NonVideo'

function App() {
  const user = useSelector(state => state.userInfo.user)
  const dispatch = useDispatch()
  console.log(user)

  useEffect(() => {
    // Load user information from local storage
    const storedUser = JSON.parse(localStorage.getItem('users'))
    if (storedUser) {
      dispatch(setUser(storedUser))
    }

  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {user ? (
          
          <>
            <Route path='/' element={<Home />} />
            <Route path='/video/:id' element={<Video />} />
            <Route path='*' element={<Navigate to={'/'}></Navigate>} />
          </>
        ) : (
          <>
          <Route path='/' element={<NonHome />} />
          <Route path='/nonvideo/:id' element={<NonVideo />} />
          <Route path='*' element={<Navigate to={'/'} />} />
          </>
          
          
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App