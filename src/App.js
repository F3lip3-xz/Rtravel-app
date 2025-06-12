import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Hotels from './pages/Hotels';
import Flights from './pages/Flights';
import Activities from './pages/Activities';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
