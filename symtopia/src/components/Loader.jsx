/**
 * Loader Component
 * 
 * A reusable loading spinner component with optional text.
 * 
 * Props:
 * - size: 'sm' | 'md' | 'lg' - Size of the spinner (default: 'md')
 * - text: string - Optional loading text to display
 * - fullScreen: boolean - Whether to show as full-screen overlay
 */

import './Loader.css'

function Loader({ size = 'md', text = '', fullScreen = false }) {
  const content = (
    <div className={`loader-container ${fullScreen ? 'loader-fullscreen' : ''}`}>
      <div className={`loader loader-${size}`}>
        <div className="loader-spinner">
          <svg viewBox="0 0 50 50">
            <circle
              className="loader-circle"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="loader-pulse"></div>
      </div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  )
  
  if (fullScreen) {
    return (
      <div className="loader-overlay">
        {content}
      </div>
    )
  }
  
  return content
}

export default Loader
