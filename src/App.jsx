import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import './App.css'
import { ResetPage } from './pages/ResetPage'
import { EventProvider } from './hooks/useEventsBuilder'
import { EventsPage } from './pages/EventsPage'
import { CreateEvent } from './pages/CreateEvent'

function App() {

  return (
    <Router>
      <div className="container_geral">
        <EventProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset" element={<ResetPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/create-event" element={<CreateEvent />} />
          </Routes>
        </EventProvider>
      </div>
    </Router>
  )
}

export default App
