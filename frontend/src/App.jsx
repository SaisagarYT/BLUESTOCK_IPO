import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import UpcomingIpo from './components/IpoScreen'
import UpcomingIPO from './pages/UpcomingIPO';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import AdminDashboard from './pages/AdminDashboard';
import Dashboard from './pages/adminDashboard/Dashboard';
import Upcoming from './pages/adminDashboard/Upcoming'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/upcomingipo' element={<UpcomingIPO/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgetpass' element={<ForgetPassword/>}/>
        <Route path='/admin/*' element={<AdminDashboard/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/upcoming' element={<Upcoming/>}/>
      </Routes>
    </div>
  )
}

export default App
