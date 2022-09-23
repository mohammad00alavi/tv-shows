import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TvShowPage from './Pages/TvShowPage'
import EpisodePage from './Pages/EpisodePage'
import ErrorPage from './Pages/ErrorPage'
import ShowDetailPage from './Pages/ShowDetailPage'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TvShowPage/>}/>
        <Route path="/show/:id" element={<ShowDetailPage />} />
        <Route path='/show/:id/episode/:id' element={<EpisodePage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
