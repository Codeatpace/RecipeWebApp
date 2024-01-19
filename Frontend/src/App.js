import React from 'react'
import Home from './screens/Home'
import Create from './screens/Create'
import UpdateForm from './screens/UpdateForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/update/:id' element={<UpdateForm/>} />
        </Routes>
    </div>
    </Router>
  )
}

export default App