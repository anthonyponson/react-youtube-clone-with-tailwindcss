import { VscHistory } from "react-icons/vsc";
import NonSidebar from "../components/NonSidebar";

const NonHistory = () => {
  return (
    <>
       <NonSidebar />
      <div className='flex flex-col items-center justify-center pt-44  mx-auto'>
        <div className='text-white mx-auto'>
          <VscHistory size={100}/>
        </div>

        <h3 className='text-lg text-white pt-6'>There is no history yet</h3>
        <h3 className='text-lg text-white py-6'>
          Sign in to see your history
        </h3>
      </div>
    </>
  );
}

export default NonHistory;