import React from 'react';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import Home from './pages/Home';
import Listing from './pages/Listing';
import PropertiesForm from './pages/PropertiesForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Dashboard role="admin"/> */}
      {/* <Home/>
      <Listing/>
      <PropertiesForm/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/PropertiesForm" element={<PropertiesForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
