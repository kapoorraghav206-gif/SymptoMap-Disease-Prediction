import { Link } from "react-router-dom";
import InteractiveHoverButton from "./InteractiveHoverButton";
import "./InteractiveHoverButtonDemo.css";

function InteractiveHoverButtonDemo() {
  const handleClick = (variant) => {
    console.log(`${variant} button clicked!`);
  };

  return (
    <div className="interactive-demo-container">
      <div className="demo-header">
        <h2>Interactive Hover Button Demo</h2>
        <p>Experience smooth animations, ripple effects, and hover interactions</p>
      </div>

      {/* Variants Section */}
      <section className="demo-section">
        <h3 className="demo-section-title">Button Variants</h3>
        <div className="demo-button-grid">
          <InteractiveHoverButton 
            variant="primary" 
            onClick={() => handleClick("Primary")}
          >
            Primary Button
          </InteractiveHoverButton>

          <InteractiveHoverButton 
            variant="secondary" 
            onClick={() => handleClick("Secondary")}
          >
            Secondary Button
          </InteractiveHoverButton>

          <InteractiveHoverButton 
            variant="success" 
            onClick={() => handleClick("Success")}
          >
            Success Button
          </InteractiveHoverButton>

          <InteractiveHoverButton 
            variant="danger" 
            onClick={() => handleClick("Danger")}
          >
            Danger Button
          </InteractiveHoverButton>

          <InteractiveHoverButton 
            variant="ghost" 
            onClick={() => handleClick("Ghost")}
          >
            Ghost Button
          </InteractiveHoverButton>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="demo-section">
        <h3 className="demo-section-title">Button Sizes</h3>
        <div className="demo-button-row">
          <InteractiveHoverButton variant="primary" size="small">
            Small
          </InteractiveHoverButton>

          <InteractiveHoverButton variant="primary" size="medium">
            Medium
          </InteractiveHoverButton>

          <InteractiveHoverButton variant="primary" size="large">
            Large
          </InteractiveHoverButton>
        </div>
      </section>

      {/* With Icons Section */}
      <section className="demo-section">
        <h3 className="demo-section-title">With Icons</h3>
        <div className="demo-button-row">
          <InteractiveHoverButton variant="primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Report Symptoms
          </InteractiveHoverButton>

          <InteractiveHoverButton variant="secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
            </svg>
            View Dashboard
          </InteractiveHoverButton>

          <InteractiveHoverButton variant="success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Confirm
          </InteractiveHoverButton>
        </div>
      </section>

      {/* States Section */}
      <section className="demo-section">
        <h3 className="demo-section-title">Button States</h3>
        <div className="demo-button-row">
          <InteractiveHoverButton variant="primary">
            Normal State
          </InteractiveHoverButton>

          <InteractiveHoverButton variant="primary" disabled>
            Disabled State
          </InteractiveHoverButton>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="demo-section">
        <h3 className="demo-section-title">Real-world Examples</h3>
        <div className="demo-card">
          <h4>Symptom Report Form</h4>
          <p>Quick action buttons for your SymptoMap application</p>
          <div className="demo-button-row" style={{ marginTop: "1rem" }}>
            <Link to="/report" style={{ textDecoration: "none" }}>
              <InteractiveHoverButton variant="primary" size="large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Submit Report
              </InteractiveHoverButton>
            </Link>

            <InteractiveHoverButton variant="ghost">
              Cancel
            </InteractiveHoverButton>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="demo-section">
        <h3 className="demo-section-title">Features</h3>
        <div className="demo-features">
          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <div>
              <strong>Shine Effect</strong>
              <p>Animated shine sweep on hover</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💧</span>
            <div>
              <strong>Ripple Effect</strong>
              <p>Material Design-inspired ripples</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌟</span>
            <div>
              <strong>Glow Effect</strong>
              <p>Subtle glow on hover</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎨</span>
            <div>
              <strong>Multiple Variants</strong>
              <p>5 different color schemes</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📏</span>
            <div>
              <strong>3 Sizes</strong>
              <p>Small, medium, and large</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">♿</span>
            <div>
              <strong>Accessible</strong>
              <p>Keyboard and screen reader friendly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InteractiveHoverButtonDemo;
