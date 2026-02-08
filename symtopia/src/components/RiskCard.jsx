/**
 * RiskCard Component
 * 
 * Displays outbreak risk information for a specific location.
 * Shows location name, risk level, and additional details.
 * 
 * Props:
 * - location: string - Name of the location
 * - riskLevel: 'Low' | 'Medium' | 'High' - Current risk level
 * - reportCount: number - Number of symptom reports (optional)
 * - trend: 'up' | 'down' | 'stable' - Risk trend (optional)
 */

import './RiskCard.css'

function RiskCard({ location, riskLevel, reportCount = 0, trend = 'stable' }) {
  // Get risk level styling class
  const getRiskClass = () => {
    switch (riskLevel) {
      case 'High':
        return 'risk-high'
      case 'Medium':
        return 'risk-medium'
      case 'Low':
      default:
        return 'risk-low'
    }
  }
  
  // Get risk level icon
  const getRiskIcon = () => {
    switch (riskLevel) {
      case 'High':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        )
      case 'Medium':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        )
      case 'Low':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        )
    }
  }
  
  // Get trend icon
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        )
      case 'down':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
            <polyline points="17 18 23 18 23 12" />
          </svg>
        )
      case 'stable':
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )
    }
  }
  
  return (
    <div className={`risk-card ${getRiskClass()}`}>
      <div className="risk-card-header">
        <div className="risk-icon">
          {getRiskIcon()}
        </div>
        <div className={`risk-badge badge badge-${riskLevel.toLowerCase()}`}>
          {riskLevel} Risk
        </div>
      </div>
      
      <div className="risk-card-body">
        <h3 className="risk-location">{location}</h3>
        
        <div className="risk-stats">
          <div className="risk-stat">
            <span className="stat-value">{reportCount}</span>
            <span className="stat-label">Reports</span>
          </div>
          
          <div className="risk-stat">
            <span className={`stat-trend trend-${trend}`}>
              {getTrendIcon()}
              <span>{trend === 'up' ? 'Rising' : trend === 'down' ? 'Falling' : 'Stable'}</span>
            </span>
            <span className="stat-label">Trend</span>
          </div>
        </div>
      </div>
      
      <div className="risk-card-footer">
        <span className="last-updated">Updated just now</span>
      </div>
    </div>
  )
}

export default RiskCard
