import React, { useState } from 'react'

const AdminDashboard = () => {
  const [isSelect1, setSelect1] = useState();
  const [isSelect2, setSelect2] = useState(false);

  const sidebar = [
    {
        title:"Dashboard",
        icon:<i class="ri-bar-chart-box-fill"></i>
    },
    {
        title:"Manage IPO",
        icon:<i class="ri-shopping-cart-fill"></i>
    },
    {
        title:"IPO Subscription",
        icon:<i class="ri-file-chart-fill"></i>
    },
    {
        title:"IPO Allotment",
        icon:<i class="ri-chat-voice-fill"></i>
    },
    {
        title:"Settings",
        icon:<i class="ri-settings-3-fill"></i>
    },
    {
        title:"API Manager",
        icon:<i class="ri-wallet-3-fill"></i>
    },
    {
        title:"Accounts",
        icon:<i class="ri-user-fill"></i>
    },
    {
        title:"Help",
        icon:<i class="ri-question-fill"></i>
    },
  ]

  const tabs1 = sidebar.filter((item,index) => index < 4);
  const tabs2 = sidebar.filter((item,index) => index > 3);
  return (
    <div className='w-screen h-screen flex'>
      <nav className='w-full h-17 absolute justify-between top-0 border-b-1 flex items-center border-gray-300'>
        <div className='w-60 h-full bg-[var(--bg-violet-light)] flex items-center justify-center'>
          <h1 className='text-[var(--text-violet)] font-bold flex items-center justify-center gap-2'><p className='p-1 rounded-full bg-[var(--text-violet)] text-white px-2'>BF</p><p>Bluestock Fintech</p></h1>
        </div>
        <div className='border-1 flex w-[40%] justify-between items-center focus:ring-2 focus:ring-violet-300 focus:border-2 pr-3'>
          <input type="text" placeholder='Search' className='w-full indent-2 outline-0 h-10' />
          <i class="ri-search-line"></i>
        </div>
        <div className='flex'>
          <div className='text-sm flex gap-2 items-center pr-10 w-70 justify-between'>
            <div className='flex gap-2 items-center'>
              <p className='text-lg font-bold p-2 bg-amber-300 size-10 rounded-full text-center'>V</p>
              <p>Hi, Vishal</p>
            </div>
            <i class="ri-arrow-down-wide-fill"></i>
            <i class="ri-notification-4-line"></i>
          </div>
        </div>
      </nav>
        <div className='w-60 mt-17 h-full bg-[var(--bg-admin-bar)]'>
          <div className='w-full py-6 px-5'>
            <h1 className='text-[11px] text-[#08243173] pl-6'>MENU</h1>
            <ul className='w-full flex flex-col gap-2 mt-2'>
              {
                tabs1.map((item,index) => <li onClick={() =>{setSelect1(index); setSelect2(null)}} className={`flex transition-all cursor-pointer rounded-sm gap-3 py-3 px-5 items-center font-medium ${isSelect1 == index?'bg-[var(--bg-violet-light)] text-[var(--bg-violet-text)]':''} text-[var(--bg-lightgray-text)] `} key={index}><span>{item.icon}</span><p className='text-[12px]'>{item.title}</p></li>)
              }
            </ul>
            <p className='text-[11px] text-[#0b2d3d71] pl-6 mt-6'>OTHERS</p>
            <ul className='w-full flex flex-col gap-2 mt-2'>
              {
                tabs2.map((item,index) => <li onClick={() => {setSelect2(index); setSelect1(null)}} className={`flex cursor-pointer rounded-sm gap-3 transition-all py-3 px-5 items-center font-medium ${isSelect2 == index?'bg-[var(--bg-violet-light)] text-[var(--bg-violet-text)]':''} text-[var(--bg-lightgray-text)]`} key={index}><span>{item.icon}</span><p className='text-[12px]'>{item.title}</p></li>)
              }
            </ul>
          </div>
        </div>
        <div className='max-w-full h-screen'>
          
        </div>
    </div>
  )
}

export default AdminDashboard
