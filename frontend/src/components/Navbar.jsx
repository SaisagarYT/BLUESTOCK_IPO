import React from 'react'
import mainLogo from '../assets/logo.png';
import sideBar from '../assets/grip-vertical (1).png';
const Navbar = () => {
  return (
    <div>
      <div className='w-full h-[125px] shadow-[0px_1px_5px_0.1px_lightgrey] flex items-center justify-between pl-10 pr-10 max-sm:pl-5 max-sm:pr-5'>
        <img className='w-60' src={mainLogo} alt="" />
        <ul className='flex gap-8 text-[15px] text-[#9a9a9a] font-medium max-[1202px]:hidden'>
          <li>PRODUCTS</li>
          <li>PRICING</li>
          <li>COMMUNITY</li>
          <li>MEDIA</li>
          <li>SUPPORT</li>
        </ul>
        <div className='flex gap-5 items-center'>
          <p className='text-[grey] font-medium max-[1202px]:hidden'>Sign in</p>
          <button className='pl-3 pr-3 pt-2 pb-2 bg-[#3f52ff] mr-6 font-medium text-white max-[1202px]:hidden'>Sign Up Now</button>
          <img className='w-7' src={sideBar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
