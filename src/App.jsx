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
import { RoutesApp } from './routes'
// import { Provider } from 'react-redux';
// import Reactotron from 'reactotron-react-js'; // Configurações do Reactotron
// import store from './store'; // Importe sua store

function App() {

  return (
    <RoutesApp />
  )
}

export default App
