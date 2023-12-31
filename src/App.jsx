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
import Detail from './Components/Movies and TV Shows/DetailedPage/Detail'
import TVDetail from './Components/Movies and TV Shows/DetailedPage/TVDetail'
import Generes from './Components/Movies and TV Shows/Generes'
import AutocompleteSearch from './Components/Movies and TV Shows/AutocompleteSearch'


function App() {
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
        <Route path='/search' element={<AutocompleteSearch />} />
        <Route path='/genre' element={<Generes />} />
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/tvshow/:id' element={<TVDetail />} />
      </Routes>

    </>
  )
}

export default App
