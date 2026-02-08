/**
 * Constants for SymptoMap Application
 * 
 * This file contains all constant values used throughout the application.
 * Centralized here for easy maintenance and updates.
 */

// Tamil Nadu Districts - Official list
// The application is strictly limited to these districts
export const TAMIL_NADU_DISTRICTS = [
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Coimbatore', label: 'Coimbatore' },
  { value: 'Madurai', label: 'Madurai' },
  { value: 'Tiruchirappalli', label: 'Tiruchirappalli' },
  { value: 'Salem', label: 'Salem' },
  { value: 'Erode', label: 'Erode' },
  { value: 'Tiruppur', label: 'Tiruppur' },
  { value: 'Vellore', label: 'Vellore' },
  { value: 'Thoothukudi', label: 'Thoothukudi' },
  { value: 'Tirunelveli', label: 'Tirunelveli' },
  { value: 'Kanyakumari', label: 'Kanyakumari' },
  { value: 'Dindigul', label: 'Dindigul' },
  { value: 'Thanjavur', label: 'Thanjavur' },
  { value: 'Cuddalore', label: 'Cuddalore' },
  { value: 'Villupuram', label: 'Villupuram' },
  { value: 'Kancheepuram', label: 'Kancheepuram' },
  { value: 'Chengalpattu', label: 'Chengalpattu' },
  { value: 'Ranipet', label: 'Ranipet' },
  { value: 'Krishnagiri', label: 'Krishnagiri' },
  { value: 'Dharmapuri', label: 'Dharmapuri' }
]

// Symptoms list with icons
export const SYMPTOMS_LIST = [
  { id: 'fever', label: 'Fever', icon: '🌡️' },
  { id: 'cough', label: 'Cough', icon: '😷' },
  { id: 'fatigue', label: 'Fatigue', icon: '😴' },
  { id: 'headache', label: 'Headache', icon: '🤕' },
  { id: 'rash', label: 'Rash', icon: '🔴' },
  { id: 'vomiting', label: 'Vomiting', icon: '🤢' },
]

// State name constant
export const STATE_NAME = 'Tamil Nadu'

// Application metadata
export const APP_CONFIG = {
  name: 'SymptoMap',
  subtitle: 'Early Disease Outbreak Prediction – Tamil Nadu',
  description: 'Help protect Tamil Nadu by anonymously reporting symptoms. Our AI-powered system analyzes patterns to predict and prevent disease outbreaks before they spread.',
  version: '1.0.0'
}
