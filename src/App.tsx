import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import RestaurantMenu from "./pages/RestaurantMenu";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthProvider from "./providers/AuthProvider";

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/offers"
                element={
                  <ProtectedRoute>
                    <Offers />
                  </ProtectedRoute>
                }
              />
              <Route path="/help" element={<Help />} />
              <Route path="/restaurants/:name" element={<RestaurantMenu />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </Suspense>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
