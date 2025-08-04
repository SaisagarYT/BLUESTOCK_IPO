import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full h-full'>
      <h1 className='text-xl font-medium py-10'>Dashboard</h1>
      <section className='w-full flex'>
        <div className='w-1/3 border-r-1 border-black flex flex-col gap-3'>
          <h3 className='text-lg font-medium text-gray-700'>IPO Dashboard India</h3>
          <span className='flex gap-1'><i className="ri-arrow-up-long-fill text-green-500"></i><p className='text-green-500'>20</p> <p className='text-gray-400'>IPO in Gain</p></span>
          <div className='w-full h-100 bg-blue-400 flex items-center justify-center'>
            <p>Charts are showen here!</p>
          </div>
        </div>

        <div className='1/3 px-10 border-r-1 border-black flex flex-col gap-3'>
          <h4 className='text-lg font-medium'>Quick Links</h4>
          <p className='text-gray-500'>Adipiscing elit, sed do eiusmod tempor</p>
          <div className='w-full h-100 bg-blue-400 flex justify-center items-center'>
            <p>Data is showen here!</p>
          </div>
        </div>

        <div className='w-1/3 flex flex-col gap-3'>
        <div></div>
          <div className='flex justify-between'>
            <div>
              <h4 className='text-lg font-medium'>Main Board IPO</h4>
              <p className='text-gray-500'>From 01 jan 2024</p>
            </div>
            <button className='px-4 border-1 rounded-md shadow-sm border-gray-200 text-violet-700 py-2'>View Report</button>
          </div>
          <div className='flex justify-center items-center w-full h-100 bg-blue-400'>
            <p>Chart will be displayed here!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
