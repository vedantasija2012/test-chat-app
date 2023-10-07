import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Join from './component/Join'
import Chat from './component/Chat'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Join/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App