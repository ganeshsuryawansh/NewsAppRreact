import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className="flex bg-black text-yellow-500 flex-col sm:flex-row px-5 font-medium sm:mx-10 justify-between dark:text-gray-400">
      <div className='text-2xl'>
        <h1><span className='text-red-500'><Link to={"/"}>Surya</Link></span><span className=''><Link to={"/"}>News24</Link></span></h1>
      </div>
      <div className='mt-2'>
        <ul className='flex flex-row justify-between'>
          <li className='px-2 hidden'><Link to={"/"}>Home</Link></li>
          <li className='px-2'>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
