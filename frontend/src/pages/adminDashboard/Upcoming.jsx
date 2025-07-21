import React from 'react'
import { ipoApi } from '../../features/iop/ipoAPI'
import { useEffect } from 'react'
import { useState } from 'react'

const Upcoming = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    ipoApi()
    .then(res => setData(res))
    .catch((err) => console.log(err.message))
  },[])
  console.log(data);
  return (
    <div className='w-full h-full'>
      <div className=' flex justify-between p-8'>
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
              <td className='py-3 px-3'>{item.company}</td>
              <td>{item.priceBand.max} - {item.priceBand.min}</td>
              <td>{(item.openDate).slice(0,10)}</td>
              <td>{(item.closeDate).slice(0,10)}</td>
              <td>{(item.issueSize)}</td>
              <td>{(item.listingDate).slice(0,10)}</td>
              <td className=''><p className={`border  py-1 rounded-2xl ${item.status == "Ongoing"? 'border-green-500 bg-green-200 text-green-600' : ''} ${item.status == 'Upcoming'?'bg-orange-100 text-orange-500 border border-orange-300' : ''}`}>{item.status}</p></td>
            </tr>
          })
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Upcoming
