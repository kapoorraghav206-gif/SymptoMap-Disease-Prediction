/**
 * Report Page Component - Card-Based Dashboard Design
 * 
 * Modern healthcare dashboard interface for symptom reporting.
 * Features card-style disease selection with risk indicators.
 */

import SymptomReport from '../components/SymptomReport'
import './Report.css'

function Report() {
  return (
    <div className="page report-page">
      <SymptomReport />
    </div>
  )
}

export default Report
