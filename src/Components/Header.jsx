import React from 'react'
import logo from '../assets/hero.png'
export default function Header() {
  return (
    <div>
     <ul className='flex gap-4 p-4'>
    <li>
        <img src={logo} alt="profile" className='w-8 rounded-full' />  
    </li>
    <li>
       my location
    </li>
    <li>
       <input 
       value="search"
       className='border border-gray-300 
       rounded-md px-2 py-1 focus:outline-none 
       focus:ring-2 focus:ring-blue-500'
       />
       
     </li>
    <li>
      <button className='bg-blue-600
       text-white px-4 py-2 rounded-md hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-500'>
       Login
      </button>        
      </li>
           <li>
              <button className='bg-green-500 text-white px-4 py-2
               rounded-md hover:bg-green-600 focus:outline-none 
               focus:ring-2 focus:ring-green-500'>
       My Cart
         </button>
           </li>



     </ul>



    </div>
  )
}
