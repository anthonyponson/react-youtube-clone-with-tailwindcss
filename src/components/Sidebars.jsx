import React, { useState } from 'react'
import { SideBarItems } from '../static/data'
import { stateContext } from '../Context'
import { useContext } from 'react'

const Sidebar = () => {
  const { state } = useContext(stateContext);
  
  const [active, setActive] = useState('Home')
  
  return (
    <>
    {state.showSidebar && (
       <div
       className={`scrollbar z-10 w-1/5 bg-black h-[calc(100vh-53px)] mt-14 fixed top-0 left-0 text-white
       p-3 overflow-scroll`}
      
     >
       {/* topitems */}
       <div className='mb-4 space-y-2'>
         {SideBarItems.Top.map((item, index) => {
           return (
             <div
               key={index}
               className={`h-8 space-x-4  flex justify-start items-center px-3 rounded-xl 
                       cursor-pointer hover:bg-light_black my-1 
                       ${
                         item.name === active ? 'bg-light_black' : 'bg-black'
                       }`}
               onClick={() => setActive(item.name)}
             >
               <span className=''>{item.icon}</span>
               <p className=''>{item.name}</p>
             </div>
           )
         })}
       </div>
       <hr className='text-light_black my-2' />

       {/* middleitems */}

       <div className='mb-4 space-y-2'>
         {SideBarItems.Middle.map((item, index) => {
           return (
             <div
               key={index}
               className={`h-8 space-x-4  flex justify-start items-center px-3 rounded-xl 
                       cursor-pointer hover:bg-light_black my-1 
                       ${
                         item.name === active ? 'bg-light_black' : 'bg-black'
                       }`}
               onClick={() => setActive(item.name)}
             >
               <span className=''>{item.icon}</span>
               <p className=''>{item.name}</p>
             </div>
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
                       ${
                         item.name === active ? 'bg-light_black' : 'bg-black'
                       }`}
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
    )}
    
    </>
  )
}

export default Sidebar
