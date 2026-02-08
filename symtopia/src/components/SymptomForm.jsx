import { useState } from 'react'
import { TAMIL_NADU_DISTRICTS } from '../utils/constants'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import './SymptomForm.css'

const SYMPTOMS_CONFIG = [
  { id: 'difficultyBreathing', label: 'Difficulty Breathing', icon: '🫁' },
  { id: 'cough', label: 'Cough', icon: '😷' },
  { id: 'fatigue', label: 'Fatigue', icon: '😴' },
  { id: 'fever', label: 'Fever', icon: '🌡️' },
  { id: 'headache', label: 'Headache', icon: '🤕' },
  { id: 'nausea', label: 'Nausea', icon: '🤢' },
]

export default function SymptomForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    city: '',
    difficultyBreathing: false,
    cough: false,
    fatigue: false,
    fever: false,
    headache: false,
    nausea: false
  })

  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [prediction, setPrediction] = useState(null)

  const handleToggle = (id) => {
    setFormData(prev => ({ ...prev, [id]: !prev[id] }))
    setErrorMsg('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.city) {
      setErrorMsg('Please select a city')
      return
    }

    setStatus('submitting')
    setErrorMsg('')
    setPrediction(null)

    try {
      const payload = {
        date: formData.date,
        city: formData.city,
        difficultyBreathing: formData.difficultyBreathing,
        cough: formData.cough,
        fatigue: formData.fatigue,
        fever: formData.fever,
        headache: formData.headache,
        nausea: formData.nausea,
        timestamp: serverTimestamp()
      }

      // 1️⃣ Save data to Firebase
      await addDoc(collection(db, 'symptoms'), payload)

      // 2️⃣ Call Flask ML API
      try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            difficultyBreathing: formData.difficultyBreathing,
            cough: formData.cough,
            fatigue: formData.fatigue,
            fever: formData.fever,
            headache: formData.headache,
            nausea: formData.nausea
          })
        })

        if (response.ok) {
          const result = await response.json()
          if (result.success) {
            setPrediction(result.predicted_disease)
          }
        }
      } catch (mlError) {
        console.warn('ML prediction failed:', mlError)
      }

      setStatus('success')
      if (onSubmitSuccess) onSubmitSuccess(payload)

    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Failed to submit report. Please check your connection.')
    }
  }

  // ✅ SUCCESS SCREEN
  if (status === 'success') {
    return (
      <div className="success-wrapper">
        <div className="success-card">
          <h2 className="success-title">Report Submitted Successfully!</h2>

          {prediction && (
            <div style={{
              margin: '1.5rem 0',
              padding: '1.25rem',
              background: '#eef6ff',
              borderRadius: '10px',
              border: '2px solid #0077b6'
            }}>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#023e8a' }}>
                🩺 AI Prediction: {prediction}
              </p>
            </div>
          )}

          <p>Thank you for contributing anonymous health data.</p>

          <button
            className="success-button"
            onClick={() => {
              setFormData({
                date: new Date().toISOString().split('T')[0],
                city: '',
                difficultyBreathing: false,
                cough: false,
                fatigue: false,
                fever: false,
                headache: false,
                nausea: false
              })
              setPrediction(null)
              setStatus('idle')
            }}
          >
            Submit Another Report
          </button>
        </div>
      </div>
    )
  }

  // ✅ FORM UI
  return (
    <div className="symptom-form-wrapper">
      <form onSubmit={handleSubmit} className="form-content">
        <h2>Symptom Report</h2>

        <label>
          Date
          <input
            type="date"
            value={formData.date}
            max={new Date().toISOString().split('T')[0]}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
          />
        </label>

        <label>
          District (Tamil Nadu)
          <select
            value={formData.city}
            onChange={e => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="">Select district</option>
            {TAMIL_NADU_DISTRICTS.map(d => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
        </label>

        <div className="symptoms-grid">
          {SYMPTOMS_CONFIG.map(s => (
            <button
              type="button"
              key={s.id}
              onClick={() => handleToggle(s.id)}
              className={formData[s.id] ? 'symptom selected' : 'symptom'}
            >
              {s.icon} {s.label}
            </button>
          ))}
        </div>

        {errorMsg && <p className="error-message">{errorMsg}</p>}

        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Submit Health Report'}
        </button>

        <p className="privacy-note">🔒 Data is stored anonymously</p>
      </form>
    </div>
  )
}
