import React, { useState } from 'react'
import mainLogo from '../assets/logo.png';
import sideBar from '../assets/grip-vertical (1).png';
const Navbar = () => {
  const [Toggle,isToggle] = useState(false);
  console.log(Toggle)
  const navTabs = ['PRODUCTS','PRICING','COMMUNITY','MEDIA','SUPPORT'];
  return (
    <div className=''>
      <div className='w-full h-[125px] relative shadow-[0px_1px_5px_0.1px_lightgrey] flex items-center justify-between pl-10 pr-10 max-sm:pl-5 max-sm:pr-5'>
        <div className='flex gap-7'>
          <img className='size-10 w-auto max-md:size-7 max-md:w-auto' src={mainLogo} alt="" />
            {
              navTabs.map((item,index) =>{
                return <ul className='max-md:hidden max-xl:hidden'>
                  <li key={index} className='cursor-pointer text-[15px] font-medium text-[var(--bg-gray)] max-md:hover:bg-gray-100 max-md:bg-black w-full text-center py-3'>{item}</li>
                  </ul>
              })
            }
        </div>
        <div className='flex gap-5 items-center'>
          <p className='text-[var(--bg-gray)] font-medium cursor-pointer text-[15px max-xl:hidden'>Sign in</p>
          <button className='pl-3 pr-3 pt-2 pb-2 cursor-pointer bg-[var(--bg-violet)] max-xl:hidden mr-6 font-medium text-[15px] text-white'>Sign Up Now</button>
          <div className=''>
            <img className='w-7 cursor-pointer' onClick={() => !Toggle? isToggle(true) : isToggle(false)} src={sideBar} alt=""/>
            <ul className={`fixed xl:hidden transition-transform duration-250 ${Toggle? 'right-0 p-6 w-1/2 font-medium bg-white top-0 h-screen shadow-xl' : 'translate-x-[100%]'}`}>
              <span className='w-full text-2xl h-10 flex justify-end' onClick={() => !Toggle? isToggle(true) : isToggle(false)}>
                x
              </span>
              {
                navTabs.map((item,index) => <li className='pb-3 text-center' key={index}>{item}</li>)
              }
              <p className='text-[var(--bg-gray)] mb-4 w-full py-3 bg-gray-100 text-center font-medium cursor-pointer text-[15px]'>Sign in</p>
              <button className=' w-full py-3 cursor-pointer bg-[var(--bg-violet)] mr-6 font-medium text-[15px] text-white'>Sign Up Now</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
