import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import UpcomingIpo from './components/IpoScreen'
import UpcomingIPO from './pages/UpcomingIPO';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/upcomingipo' element={<UpcomingIPO/>} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgetpass' element={<ForgetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
