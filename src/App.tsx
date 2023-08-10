import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import RestaurantMenu from "./pages/RestaurantMenu";
import Offers from "./pages/Offers";
import Help from "./pages/Help";

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/help" element={<Help />} />
            <Route path="/restaurants/:name" element={<RestaurantMenu />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}
