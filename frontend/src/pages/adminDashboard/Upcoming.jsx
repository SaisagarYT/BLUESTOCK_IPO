import React from 'react'
import { ipoApi } from '../../features/iop/ipoAPI'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterIPO from '../RegisterIPO'

const Upcoming = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  let least = 0, highest = 9;
  useEffect(() =>{
    ipoApi()
    .then(res => setData(res))
    .catch((err) => console.log(err.message))
  },[])
  const IPOFilter = data.filter((item,index) => index <= highest && index >= least);
  return (
    <div className='w-full h-full overflow-scroll'>
      <div className=' flex justify-between p-4 items-center'>
        <p className='text-lg font-medium'>Upcomming IPO | Dashboard</p>
        <Link to='/iporegister'>
          <button className='bg-gray-50 border-1 border-violet-200 px-10 py-2 text-md shadow-sm border-0.5 rounded-sm text-[var(--bg-violet-text)] cursor-pointer'>Register IPO</button>
        </Link>
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
          IPOFilter.map((item,index) =>{
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
      <div className='w-full flex mt-5'>
          <ul className='w-full flex gap-2'>
            <li onClick={() => least+=10} className='cursor-pointer size-8 rounded-sm bg-gray-600 text-2xl justify-center items-center flex text-white font-bold'> <i class="ri-arrow-drop-left-line"></i> </li>
            <li className='size-8 rounded-sm text-black justify-center items-center flex font-medium border border-purple-500'> 1 </li>
            <li className='size-8 cursor-pointer rounded-sm bg-gray-600 text-2xl justify-center items-center flex text-white font-bold'> <i class="ri-arrow-drop-right-line"></i> </li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Upcoming
