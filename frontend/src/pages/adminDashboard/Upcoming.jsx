import React from 'react'

const Upcoming = () => {
  return (
    <div className='w-full h-full'>
      <div className='max-w-full flex justify-between'>
        <p className='text-lg font-medium'>Upcomming IPO | Dashboard</p>
        <button className='bg-[var(--bg-white-medium1)] py-1 px-4 text-[12px] shadow-sm border-0.5 rounded-sm text-[var(--bg-violet-text)]'>Register IPO</button>
      </div>
      <div className='w-full'>
       <table className="w-full table-auto">
        <thead className="">
          <tr>
            <th className="px-4 py-2 text-left">Company</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Open</th>
            <th className="px-4 py-2 text-left">Close</th>
            <th className="px-4 py-2 text-left">Issue Size</th>
            <th className="px-4 py-2 text-left">Listing Date</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
            <th className="px-4 py-2 text-left">Delete/View</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 bg-[var(--bg-white-medium2)]">
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
            <td className="px-4 py-2">demo</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Upcoming
