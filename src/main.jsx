import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import CiutatsLayout from './layouts/CityLayout.jsx'
import Barcelona from './pages/Barcelona.jsx';
import Madrid from './pages/Madrid.jsx';
import Paris from './pages/Madrid copy.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />


        <Route path="/ciutats" element={<CiutatsLayout />}>
          <Route path="barcelona" element={<Barcelona />} />
          <Route path="madrid" element={<Madrid />} />
          <Route path="paris" element={<Paris />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
