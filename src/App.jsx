import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import './App.css'
import { ResetPage } from './pages/ResetPage'
import { EventProvider } from './hooks/useEventsBuilder'
import { EventsPage } from './pages/EventsPage'
import { NavBar } from './components/NavBar'
import { UserPage } from './pages/UserPage'

function App() {

  return (
    <Router>
      <div className="container_geral">
        <EventProvider>
        <NavBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset" element={<ResetPage />} />
            <Route path="/" element={<EventsPage />} />
            <Route path="/minha-conta" element={<UserPage />} />
          </Routes>
        </EventProvider>
      </div>
    </Router>
  )
}

export default App
