import { useContext } from 'react';
import Sidebar from '../components/SideBars'
import { stateContext } from '../Context'

const Home = () => {
  const { state, dispatch } = useContext(stateContext);
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  )
}

export default Home