import React from 'react'
import { ipoApi } from '../../features/iop/ipoAPI'
import { useEffect } from 'react'
import { useState } from 'react'

const Upcoming = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  useEffect(() =>{
    ipoApi()
    .then(res => setData(res))
    .catch((err) => console.log(err.message))
  },[data])
  
  return (
    <div className='w-full h-full'>
      <div className=' flex justify-between p-4'>
        <p className='text-lg font-medium'>Upcomming IPO | Dashboard</p>
        <button className='bg-[var(--bg-white-medium1)] py-1 px-4 text-[12px] shadow-sm border-0.5 rounded-sm text-[var(--bg-violet-text)]'>Register IPO</button>
      </div>
      <div className=''>
       <table className="w-full text-sm table-auto text-center">
        <thead>
          <tr className='w-full'>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Price Band</th>
            <th className="px-4 py-2">Open</th>
            <th className="px-4 py-2">Close</th>
            <th className="px-4 py-2">Issue Size</th>
            <th className="px-4 py-2">Listing Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2">Delete/View</th>
          </tr>
        </thead>
        <tbody>
          {
          data.map((item,index) =>{
            return <tr key={index} className={`hover:bg-gray-50 text-sm ${index % 2 == 0? 'bg-[var(--bg-white-medium2)]' : 'white'}`}>
              <td className=''>{item.company}</td>
              <td>{item.priceBand.max} - {item.priceBand.min}</td>
              <td>{(item.openDate).slice(0,10)}</td>
              <td>{(item.closeDate).slice(0,10)}</td>
              <td>{(item.issueSize)}</td>
              <td>{(item.listingDate).slice(0,10)}</td>
              <td className=''><p className={`border  py-1 rounded-2xl ${item.status == "Ongoing"? 'border-green-500 bg-green-200 text-green-600' : ''} ${item.status == 'Upcoming'?'bg-orange-100 text-orange-500 border border-orange-300' : ''}`}>{item.status}</p></td>
              <td className='px-4'><p className='py-1 px-1 bg-violet-700 rounded-sm text-white font-bold'>Update</p></td>
              <td className='text-xl flex justify-center gap-2 py-4'><i className="ri-delete-bin-line text-red-500"></i><i className="ri-eye-line"></i></td>
            </tr>
          })
          }
        </tbody>
      </table>
        
      {/* nextpages */}
      <div className='w-full flex'>
          <ul className='w-full flex gap-2'>
            <li className='size-8 rounded-sm bg-gray-600 text-2xl justify-center items-center flex text-white font-bold'> - </li>
            <li className='size-8 rounded-sm text-black justify-center items-center flex font-medium border border-purple-500'> 1 </li>
            <li className='size-8 rounded-sm bg-gray-600 text-2xl justify-center items-center flex text-white font-bold'> - </li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Upcoming
