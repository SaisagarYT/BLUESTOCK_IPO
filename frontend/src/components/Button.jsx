import React from 'react'

const Button = (props) => {
  return (
    <button className='w-full h-[48px] font-medium rounded-[4px]' style={{backgroundColor:props.bgColor,color:props.textColor}}>{props.text}</button>
  )
}

export default Button
