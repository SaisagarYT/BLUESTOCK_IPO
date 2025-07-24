import React, { useEffect } from 'react';

const Card = (props) => {
  return (
    <div className='w-100 p-4 flex flex-col gap-8 rounded-[5px] shadow bg-white justify-center max-sm:pb-10'>
        <div className=' flex justify-start pt-6 items-center gap-4 max-sm:flex-col max-sm:pt-5'>
          <img className='w-15 max-sm:pb-2' src={props.logo} alt="" />
          <h1 className='max-sm:w-full text-[#0000FF]'>{props.data.company}</h1>
        </div>
        <div className='w-full'>
          <ul className='flex-wrap justify-between grid gap-4 grid-cols-3 max-sm:grid max-sm:grid-cols-2'>
            <li className='text-[14px]'>
              <p className='text-[grey]'>PRICE BRAND</p>
              <p className='text-[13px] font-bold'>Rs {props.data.priceBand.max} - {props.data.priceBand.min}</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>OPEN</p>
              <p className='text-[13px] font-bold'>{(props.data.openDate).slice(0,10)}</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>CLOSE</p>
              <p className='text-[13px] font-bold'>{(props.data.closeDate).slice(0,10)}</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>ISSUE SIZE</p>
              <p className='text-[13px] font-bold'>{props.data.issueSize}</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>ISSUE TYPE</p>
              <p className='text-[13px] font-bold'>{props.data.issueType}</p>
            </li>
            <li className='text-[14px]'>
              <p className='text-[grey]'>LISTING DATE</p>
              <p className='text-[13px] font-bold'>{props.data.listingDate.slice(0,10)}</p>
            </li>
          </ul>
        </div>
        <div className='flex gap-3 w-fit max-sm:hidden pb-2'>
          <button className='pl-4 pt-1 pr-4 pb-1 border-1 border-blue-500 text-blue-500 text-[14px] font-medium rounded-[8px]'>RHP</button>
          <button className='pl-4 pt-1 pr-4 pb-1 text-white text-[14px] font-medium rounded-[8px] bg-[#F05537]'>DRHP</button>
        </div>
      </div>
  )
}

export default Card
