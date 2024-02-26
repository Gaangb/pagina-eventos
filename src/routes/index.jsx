import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { EventProvider } from "../hooks/useEventsBuilder";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ResetPage } from "../pages/ResetPage";
import { EventsPage } from "../pages/EventsPage";
import { UserPage } from "../pages/UserPage";
import { EventsDetailsPage } from "../pages/EventsDetailsPage";
import { PaymentPage } from "../pages/PaymentPage";
import { NavBar } from "../components/NavBar";
import { loggedInUserJSON } from "../utils/utils";

function isLoggedIn() {
  return loggedInUserJSON;
}

export function RoutesApp() {
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
            <Route path="/eventos/:id" element={<EventsDetailsPage />} />
            <Route path="/pagamento" element={<PaymentPage />} />
            <Route
              path="/minha-conta"
              element={
                isLoggedIn() ? <UserPage /> : <Navigate to="/login" replace />
              }
            />
          </Routes>
        </EventProvider>
      </div>
    </Router>
  );
}
