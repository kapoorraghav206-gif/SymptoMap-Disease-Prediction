/**
 * Home Page Component
 * 
 * Landing page for SymptoMap application.
 * Displays project overview for Tamil Nadu region.
 */

import { Link } from 'react-router-dom'
import { APP_CONFIG } from '../utils/constants'
import InteractiveHoverButton from '../components/InteractiveHoverButton'
import './Home.css'

function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            {/* Decorative elements */}
            <div className="hero-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
            
            {/* Main content */}
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Privacy-First • Anonymous • Tamil Nadu
            </div>
            
            <h1 className="hero-title">
              <span className="title-highlight">{APP_CONFIG.name}</span>
            </h1>
            
            <p className="hero-tagline">
              {APP_CONFIG.subtitle}
            </p>
            
            <p className="hero-description">
              {APP_CONFIG.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-actions">
              <Link to="/report" style={{ textDecoration: 'none' }}>
                <InteractiveHoverButton variant="primary" size="large">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  Report Symptoms
                </InteractiveHoverButton>
              </Link>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <InteractiveHoverButton variant="secondary" size="large">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  View Dashboard
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="section-subtitle text-center">
            Three simple steps to help protect Tamil Nadu
          </p>
          
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
              </div>
              <h3 className="feature-title">Report Symptoms</h3>
              <p className="feature-description">
                Select the symptoms you're experiencing and your district in Tamil Nadu. 
                No personal information required.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l2 2" />
                </svg>
              </div>
              <h3 className="feature-title">AI Analysis</h3>
              <p className="feature-description">
                Our machine learning algorithms analyze symptom patterns 
                across Tamil Nadu districts to identify potential outbreaks.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="feature-title">Early Alerts</h3>
              <p className="feature-description">
                Health authorities receive early warnings to take 
                preventive measures before outbreaks escalate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Anonymous</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">TN Districts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Real-time</span>
              <span className="stat-label">Analysis</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">AI-Powered</span>
              <span className="stat-label">Predictions</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tamil Nadu Section */}
      <section className="region-section">
        <div className="container">
          <div className="region-card">
            <div className="region-icon-large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="region-content">
              <h3>Focused on Tamil Nadu</h3>
              <p>
                SymptoMap is currently limited to Tamil Nadu state to provide 
                accurate and localized outbreak predictions. We cover all major 
                districts to ensure comprehensive monitoring.
              </p>
              <ul className="region-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  20 Districts covered
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  District-level risk analysis
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Localized outbreak detection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Privacy Section */}
      <section className="privacy-section">
        <div className="container">
          <div className="privacy-card">
            <div className="privacy-icon-large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="privacy-content">
              <h3>Your Privacy is Our Priority</h3>
              <ul className="privacy-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  No personal information collected
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  No user accounts or login required
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Only district-level location data
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Data used only for public health insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Help Tamil Nadu?</h2>
            <p>Report your symptoms anonymously and contribute to early outbreak detection in your district.</p>
            <Link to="/report" style={{ textDecoration: 'none' }}>
              <InteractiveHoverButton variant="primary" size="large">
                Report Symptoms Now
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
