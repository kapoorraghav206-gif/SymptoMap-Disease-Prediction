import '../styles/SymptomReport.css'

export default function DiseaseCard({ disease, isSelected, onToggle }) {
  const { id, name, icon, risk, trend, count } = disease
  
  const riskConfig = {
    high: {
      accentColor: '#ef4444',
      iconBg: '#fee2e2',
      badgeText: 'HIGH RISK',
      badgeBg: '#fecaca'
    },
    medium: {
      accentColor: '#f97316',
      iconBg: '#fed7aa',
      badgeText: 'MEDIUM RISK',
      badgeBg: '#fdba74'
    },
    low: {
      accentColor: '#22c55e',
      iconBg: '#dcfce7',
      badgeText: 'LOW RISK',
      badgeBg: '#bbf7d0'
    }
  }

  const config = riskConfig[risk]

  const trendIcons = {
    rising: '📈',
    stable: '➡️',
    falling: '📉'
  }

  return (
    <button
      type="button"
      className={`disease-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onToggle(id)}
      style={{
        '--accent-color': config.accentColor
      }}
    >
      {/* Left Accent Bar */}
      <div 
        className="disease-card-accent" 
        style={{ backgroundColor: config.accentColor }}
      />

      {/* Card Content */}
      <div className="disease-card-content">
        {/* Top Row: Icon + Badge */}
        <div className="disease-card-header">
          <div 
            className="disease-icon-container"
            style={{ backgroundColor: config.iconBg }}
          >
            <span className="disease-icon">{icon}</span>
          </div>

          <div 
            className="risk-badge"
            style={{ 
              backgroundColor: config.badgeBg,
              color: config.accentColor
            }}
          >
            {config.badgeText}
          </div>
        </div>

        {/* Middle Section: Disease Name */}
        <div className="disease-card-title">
          <h3>{name}</h3>
          {count && <span className="disease-count">{count} cases</span>}
        </div>

        {/* Bottom Section: Trend */}
        <div className="disease-card-trend">
          <span className="trend-icon">{trendIcons[trend]}</span>
          <span className="trend-text">
            {trend.charAt(0).toUpperCase() + trend.slice(1)}
          </span>
        </div>
      </div>
    </button>
  )
}
