import { useState } from "react";
import "./InteractiveHoverButton.css";

function InteractiveHoverButton({ 
  children, 
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
  className = ""
}) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    if (disabled) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prevRipples) => 
        prevRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 600);
  };

  const handleClick = (event) => {
    createRipple(event);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={`interactive-hover-button ${variant} ${size} ${className} ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="button-content">{children}</span>
      <span className="button-shine"></span>
      <span className="button-glow"></span>
      
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="button-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size
          }}
        />
      ))}
    </button>
  );
}

export default InteractiveHoverButton;
