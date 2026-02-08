/**
 * SymptoMap - Main Application Component
 * 
 * This component sets up the main routing structure and layout
 * for the entire application.
 */

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Report from './pages/Report'
import Dashboard from './pages/Dashboard'
import SymptomReport from './components/SymptomReport'

function App() {
  return (
    <>
      {/* Navigation bar - present on all pages */}
      <Navbar />
      
      {/* Main content area with routing */}
      <main>
        <Routes>
          {/* Home page - landing page with project overview */}
          <Route path="/" element={<Home />} />
          
          {/* Report page - anonymous symptom submission form */}
          <Route path="/report" element={<Report />} />
          
          {/* NEW: Card-based symptom report dashboard */}
          <Route path="/report-dashboard" element={<SymptomReport />} />
          
          {/* Dashboard page - outbreak risk visualization */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  )
}

export default App
