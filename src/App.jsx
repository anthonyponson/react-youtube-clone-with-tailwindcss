import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Navbar from './components/Navbar'
import { stateContext } from './Context'
import { initialState, stateReducer } from './Reducer'
import { useReducer } from 'react'

function App() {
  const [state , dispatch] = useReducer(stateReducer, initialState)
  return (
    <stateContext.Provider value={{state, dispatch:dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video:id' element={<Video />} />
        </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

export default App
