import React from 'react'
import AdminDashboard from './AdminDashboard';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const RegisterIPO = () => {
  const params = useParams();
  const tabs = [
    {
      title:"IPO Inforamtion",
      icon:<i className="ri-compass-2-line"></i>
    },
    {
      title:"IPO Info",
      icon:<i class="ri-article-line"></i>
    }
  ]
  return (
    <div className='flex'>
      <AdminDashboard/>
      <div className='top-1/9 left-1/7 flex-col absolute flex w-406 justify-between h-25'>
        <div className='w-full flex justify-between h-full items-center'>
          <div className='h-full flex flex-col justify-between'>
            <h2 className='text-[28px]'>Upcomming IPO Information</h2>
            <p>Manage your IPO Details</p>
          </div>
          <div className='flex gap-4'>
            <button className='py-3 px-10 bg-blue-500 opacity-80 rounded-xl'>Register</button>
            <button className='py-3 px-10 border-2 border-blue-500 opacity-80 rounded-xl text-blue-600 font-medium'>Cancel</button>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='w-100 border-r-1 border-black pt-10 flex flex-col gap-2'>
            {
              tabs.map((item,index) =>{
                return <button className={`flex text-lg items-center w-60 gap-2  py-3 rounded-sm px-2`}>{item.icon} <p>{item.title}</p></button>
              })
            }
          </div>
          <div className='w-full pl-15'>
            <h1 className='text-2xl font-medium'>IPO Information</h1>
            <p>Enter IPO Details</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterIPO
