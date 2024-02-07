import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import './App.css'
import { ResetPage } from './pages/ResetPage'
import { EventProvider } from './hooks/useEventsBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="container_geral">
        <EventProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset" element={<ResetPage />} />
          </Routes>
        </EventProvider>
      </div>
    </Router>
  )
}

export default App
