import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/dashboard'element={<Dashboard />}/>
      <Route path= '/projects' element={<Projects />} />
      


    </Routes>


     </BrowserRouter>
  )
}

export default App