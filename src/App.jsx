import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Navbar from './components/Navbar'
import { stateContext } from './Context'
import { initialState, stateReducer } from './Reducer'
import { useReducer } from 'react'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<Video />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
