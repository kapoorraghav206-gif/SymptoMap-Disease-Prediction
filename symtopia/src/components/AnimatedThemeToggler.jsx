import { useState, useEffect } from "react";
import "./AnimatedThemeToggler.css";

function AnimatedThemeToggler() {
  const [theme, setTheme] = useState("light");
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("symptomap-theme");
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    // Prevent rapid clicking during animation
    if (isAnimating) return;

    setIsAnimating(true);
    const newTheme = theme === "light" ? "dark" : "light";
    
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("symptomap-theme", newTheme);

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      className={`theme-toggler ${isAnimating ? "animating" : ""}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="toggler-track">
        <div className={`toggler-thumb ${theme}`}>
          {/* Sun icon */}
          <svg
            className={`icon sun-icon ${theme === "light" ? "visible" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Moon icon */}
          <svg
            className={`icon moon-icon ${theme === "dark" ? "visible" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default AnimatedThemeToggler;
