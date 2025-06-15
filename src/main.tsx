import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Konfigurator from './pages/configurator'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/configurator" />} />
      <Route path="/configurator" element={<Konfigurator />} />
    </Routes>
  </BrowserRouter>
)
