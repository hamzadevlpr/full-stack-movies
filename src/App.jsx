import './App.css'
import React from 'react'
import Homepage from './Components/Main/Homepage'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Main/Dashboard'
import Navbar from './Components/Navbar/Navbar';
import AllMovies from './Components/Movies and TV Shows/AllMovies';
// import TVShows from './Components/Main/TVShows';
import TV from './Components/Movies and TV Shows/TV'
import Signup from './Components/Authentication/Signup/Signup'


function App() {
  // console.clear()
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/tvShows' element={<TV />} />
        {/* <Route path='/nav' element={<Navbar />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/movies' element={<AllMovies />} />
      </Routes>

    </>
  )
}

export default App
