import React from 'react'
import companyLogo from '../assets/logo.png';
import UserInput from '../components/userInput';
import Button from '../components/button';

const ForgetPassword = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[400px] flex flex-col justify-center items-center h-screen'>
        <img src={companyLogo} className='w-70 mb-10' alt="" />
        <h1 className='font-bold text-[24px] pb-2'>Forget Password?</h1>
        <p className='w-[300px] text-center pb-5'>Enter your email address to get the password reset link.</p>
        <UserInput placeholder="hello@blustock.in" label="Email Address"/>
        <br />
        <Button text="Password Reset" bgColor="#685CFF" textColor = "white"/>
        </div>
    </div>
  )
}

export default ForgetPassword
