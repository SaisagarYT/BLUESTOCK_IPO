import React from 'react'
import companyLogo from '../assets/logo.png';
import Button from '../components/button';
import UserInput from '../components/userInput';

const Signin = () => {
  return (
    <div className='w-full h-screen justify-center items-center flex flex-col'>
      <img className='w-[300px] pb-15' src={companyLogo} alt="" />
      <div className='flex flex-col w-[400px]'>
        <UserInput placeholder= "johndoe@gmail.com" label="Email"/>

        <div className='flex flex-col gap-2 mt-6'>
            <span className='flex justify-between'>
                <label className='text-[16px]' htmlFor="">Password</label>
                <a className='text-[12px] text-[#685CFF]' href="">Forget Password?</a>
            </span>
            <input className='w-full border-1 h-[48px] rounded-[8px] indent-3 tracking-widest' type="text" placeholder='. . . . . . . .' />
        </div>

        <div className='flex gap-5 pt-4 pb-4 border-1 rounded-2xl pl-5 mt-6'>
            <input type="checkbox" />
            <p>I'm not a robot</p>
            <img src="" alt="" />
        </div>

        <section className='flex gap-3 mt-8 mb-3'>
            <input className='border-0 outline-0 w-4' type="checkbox"/>
            <p className=''>Keep me signed in</p>
        </section>

        <Button bgColor = "#685CFF" text="Login" textColor = "white"/>

        <div className='w-full justify-center items-center flex p-4'>
            <div className='w-45 h-[1px] bg-[#4B5768] absolute z-[-1]'>

            </div>
            <p className='bg-[#F4F5F7] p-2 text-[#999DA3]'>or sign in with</p>
            <span></span>
        </div>

        <Button bgColor = "#E4E7EB" text="Continue with Google" textColor = "#4B5768"/>
        
        <div className='w-full flex justify-center mt-4 text-[#685CFF]'>
            <a href="">Create an account</a>
        </div>
      </div>
    </div>
  )
}

export default Signin
