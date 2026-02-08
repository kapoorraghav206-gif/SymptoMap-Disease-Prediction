import { useState } from 'react'
import DiseaseCard from './DiseaseCard'
import SubmitCard from './SubmitCard'
import { TAMIL_NADU_DISTRICTS } from '../utils/constants'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import '../styles/SymptomReport.css'

// Sample disease/symptom data
const DISEASES = [
  { 
    id: 'dengue', 
    name: 'Dengue Fever', 
    icon: '🦟', 
    risk: 'high', 
    trend: 'rising',
    count: 245 
  },
  { 
    id: 'malaria', 
    name: 'Malaria', 
    icon: '🦠', 
    risk: 'medium', 
    trend: 'stable',
    count: 132 
  },
  { 
    id: 'typhoid', 
    name: 'Typhoid', 
    icon: '🌡️', 
    risk: 'medium', 
    trend: 'falling',
    count: 89 
  },
  { 
    id: 'cholera', 
    name: 'Cholera', 
    icon: '💧', 
    risk: 'low', 
    trend: 'stable',
    count: 12 
  },
  { 
    id: 'tuberculosis', 
    name: 'Tuberculosis', 
    icon: '🫁', 
    risk: 'high', 
    trend: 'stable',
    count: 178 
  },
  { 
    id: 'influenza', 
    name: 'Influenza', 
    icon: '🤧', 
    risk: 'low', 
    trend: 'falling',
    count: 56 
  },
  { 
    id: 'covid', 
    name: 'COVID-19', 
    icon: '😷', 
    risk: 'medium', 
    trend: 'rising',
    count: 203 
  },
  { 
    id: 'hepatitis', 
    name: 'Hepatitis', 
    icon: '🩺', 
    risk: 'low', 
    trend: 'stable',
    count: 34 
  }
]

export default function SymptomReport() {
  const [selectedDiseases, setSelectedDiseases] = useState([])
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    district: ''
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const toggleDisease = (diseaseId) => {
    setSelectedDiseases(prev => 
      prev.includes(diseaseId)
        ? prev.filter(id => id !== diseaseId)
        : [...prev, diseaseId]
    )
  }

  const handleSubmit = async () => {
    // Validation
    if (!formData.district) {
      setErrorMsg('Please select a district')
      return
    }
    if (selectedDiseases.length === 0) {
      setErrorMsg('Please select at least one disease/symptom')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    try {
      const payload = {
        date: formData.date,
        district: formData.district,
        diseases: selectedDiseases,
        timestamp: serverTimestamp()
      }

      await addDoc(collection(db, 'diseaseReports'), payload)
      setStatus('success')
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setSelectedDiseases([])
        setFormData({
          date: new Date().toISOString().split('T')[0],
          district: ''
        })
        setStatus('idle')
      }, 2000)

    } catch (err) {
      console.error('Error submitting report:', err)
      setStatus('error')
      setErrorMsg('Failed to submit report. Please check your connection.')
    }
  }

  if (status === 'success') {
    return (
      <div className="symptom-report-container">
        <div className="success-message-card">
          <div className="success-icon-container">
            <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2>Report Submitted Successfully!</h2>
          <p>Thank you for contributing to anonymous health data for Tamil Nadu.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="symptom-report-container">
      <div className="symptom-report-wrapper">
        {/* Header */}
        <div className="report-header">
          <h1>🏥 Symptom Report Dashboard</h1>
          <p>Select diseases or symptoms you are experiencing</p>
        </div>

        {/* Form Section */}
        <div className="report-form-section">
          {/* Date and District */}
          <div className="form-inputs-grid">
            <div className="form-input-group">
              <label htmlFor="date">📅 Date</label>
              <input
                id="date"
                type="date"
                value={formData.date}
                max={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-input-group">
              <label htmlFor="district">📍 District (Tamil Nadu)</label>
              <select
                id="district"
                value={formData.district}
                onChange={(e) => {
                  setFormData({ ...formData, district: e.target.value })
                  setErrorMsg('')
                }}
                className="form-input"
              >
                <option value="">Select your district</option>
                {TAMIL_NADU_DISTRICTS.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Disease Cards Grid */}
          <div className="disease-cards-section">
            <h2 className="section-title">Select Diseases / Symptoms</h2>
            <div className="disease-cards-grid">
              {DISEASES.map(disease => (
                <DiseaseCard
                  key={disease.id}
                  disease={disease}
                  isSelected={selectedDiseases.includes(disease.id)}
                  onToggle={toggleDisease}
                />
              ))}
            </div>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="error-message">
              <svg className="error-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Submit Card */}
          <SubmitCard 
            onSubmit={handleSubmit}
            disabled={status === 'submitting'}
            isSubmitting={status === 'submitting'}
          />

          {/* Privacy Notice */}
          <p className="privacy-notice">
            <span className="privacy-icon">🔒</span>
            <span>Your data is encrypted and stored anonymously</span>
          </p>
        </div>
      </div>
    </div>
  )
}
