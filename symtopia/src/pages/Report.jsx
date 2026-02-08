/**
 * Report Page Component
 * 
 * Anonymous symptom submission page.
 * Allows users to report their symptoms without any personal information.
 */

import SymptomForm from '../components/SymptomForm'
import './Report.css'

function Report() {
  /**
   * Handle successful form submission
   * This callback can be used for additional actions after submission
   * @param {Object} payload - The submitted symptom data
   */
  const handleSubmitSuccess = (payload) => {
    // Log success for debugging
    console.log('Symptom report submitted successfully:', payload)
    
    // TODO: Add any additional actions like analytics tracking
    // or showing a notification
  }
  
  return (
    <div className="page report-page">
      <div className="container">
        {/* Page Header */}
        <header className="page-header fade-in">
          <h1 className="page-title">Report Symptoms</h1>
          <p className="page-subtitle">
            Help us track and predict disease outbreaks by anonymously 
            reporting your symptoms. Your privacy is our priority.
          </p>
        </header>
        
        {/* How it works info */}
        <div className="report-info fade-in">
          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div className="info-content">
              <h4>Why report?</h4>
              <p>Your anonymous data helps identify potential outbreaks early, protecting your community.</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="info-content">
              <h4>100% Anonymous</h4>
              <p>No names, emails, or personal details. Just symptoms and your city.</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="info-content">
              <h4>Takes 30 seconds</h4>
              <p>Quick and simple form. Select symptoms, choose location, submit.</p>
            </div>
          </div>
        </div>
        
        {/* Symptom Form */}
        <div className="report-form-container fade-in">
          <SymptomForm onSubmitSuccess={handleSubmitSuccess} />
        </div>
      </div>
    </div>
  )
}

export default Report
