import '../styles/SymptomReport.css'

export default function SubmitCard({ onSubmit, disabled, isSubmitting }) {
  return (
    <button
      type="button"
      className={`submit-card ${disabled ? 'disabled' : ''} ${isSubmitting ? 'submitting' : ''}`}
      onClick={onSubmit}
      disabled={disabled}
    >
      {/* Top Blue Accent Line */}
      <div className="submit-card-accent" />

      {/* Card Content */}
      <div className="submit-card-content">
        {/* Icon */}
        <div className="submit-icon-container">
          {isSubmitting ? (
            <svg className="submit-spinner" viewBox="0 0 24 24" fill="none">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <svg className="submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          )}
        </div>

        {/* Text */}
        <div className="submit-card-text">
          <h3>{isSubmitting ? 'Submitting Report...' : 'Submit Health Report'}</h3>
          {!isSubmitting && (
            <p>Click to submit your anonymous data</p>
          )}
        </div>

        {/* Arrow */}
        {!isSubmitting && (
          <svg className="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2.5" 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        )}
      </div>
    </button>
  )
}
