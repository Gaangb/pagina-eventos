import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import './App.css'
import { ResetPage } from './pages/ResetPage'
import { EventProvider } from './hooks/useEventsBuilder'
import { EventsPage } from './pages/EventsPage'
import { NavBar } from './components/NavBar'
import { UserPage } from './pages/UserPage'
import { EventsDetailsPage } from './pages/EventsDetailsPage'
import { PaymentPage } from './pages/PaymentPage'

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
            <Route path="/eventos/:id" element={<EventsDetailsPage />} />
            <Route path="/pagamento" element={<PaymentPage />} />
          </Routes>
        </EventProvider>
      </div>
    </Router>
  )
}

export default App
