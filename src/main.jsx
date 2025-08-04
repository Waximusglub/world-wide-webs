import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import CiutatsLayout from './layouts/CityLayout.jsx'

import Barcelona from './pages/Barcelona.jsx';
import Madrid from './pages/Madrid.jsx';
import Paris from './pages/Paris.jsx';
import London from './pages/London.jsx';
import NewYork from './pages/NewYork.jsx';
import Tokyo from './pages/Tokyo.jsx';
import Sydney from './pages/Sydney.jsx';
import Rio from './pages/Rio.jsx';
import Cairo from './pages/Cairo.jsx';
import Rome from './pages/Rome.jsx';
import Dubai from './pages/Dubai.jsx';
import Bangkok from './pages/Bangkok.jsx';
import Toronto from './pages/Toronto.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/cities" element={<CiutatsLayout />}>
          <Route path="barcelona" element={<Barcelona />} />
          <Route path="madrid" element={<Madrid />} />
          <Route path="paris" element={<Paris />} />
          <Route path="london" element={<London />} />
          <Route path="new-york" element={<NewYork />} />
          <Route path="tokyo" element={<Tokyo />} />
          <Route path="sydney" element={<Sydney />} />
          <Route path="rio-de-janeiro" element={<Rio />} />
          <Route path="cairo" element={<Cairo />} />
          <Route path="rome" element={<Rome />} />
          <Route path="dubai" element={<Dubai />} />
          <Route path="bangkok" element={<Bangkok />} />
          <Route path="toronto" element={<Toronto />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
