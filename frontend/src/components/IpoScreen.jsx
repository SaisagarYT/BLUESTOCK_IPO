import React, { useState } from 'react'
import logo from '../assets/react.svg'
import Card from './Card'
import accordian from '../utils/accordians.js';
import Accordian from './accordian.jsx';

const UpcomingIpo = () => {

  const [index, setIndex] = useState();

  const toggleAccordian = (i) =>{
    setIndex(index == i ? null : i)
  }
  return (
    <div className='pl-10 pr-10 bg-[var(--bg-screen)] max-sm:p-5'>
      <div className='flex flex-col py-5'>
        <p className='text-[12px]'>UPCOMING IPO</p>
        <h1 className='text-2xl font-bold mt-2'>Upcoming IPO</h1>
        <p className='text-[14px]'>Companies that have filled for an IPO with SEBL Few detail might be disclosed by the companies later.</p>
      </div>

      <div className='w-full flex justify-between flex-wrap gap-7 max-[1335px]:justify-around'>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
        <Card logo = {logo}/>
      </div>
      <div className='mt-25 pb-15'>
        <h1 className='text-[40px]'>Frequently Asked Questions?</h1>
        <p className='text-[24px]'>Find answers to common questions that come in your mind related to IPO.</p>
      </div>

      <div className='flex flex-col gap-8'>
        {accordian.map((data,i) => {
          return <Accordian name = {data.name} id = {data.id} desc = {data.description} isOpen = {index === i} onToggle = {() => toggleAccordian(i)}/>
        })}
      </div>
    </div>
  )
}

export default UpcomingIpo
