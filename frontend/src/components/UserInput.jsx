import React from 'react'

const UserInput = (props) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label className='text-[16px]' htmlFor="">{props.label}</label>
        <input className='w-full border-1 h-[48px] rounded-[8px] indent-3' type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default UserInput
