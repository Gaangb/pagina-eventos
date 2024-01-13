import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="container_geral">
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes> 
      </div>
    </Router>
  )
}

export default App
