import AnimatedThemeToggler from "./AnimatedThemeToggler";

function AnimatedThemeTogglerDemo() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      padding: "3rem",
      minHeight: "400px"
    }}>
      <h2 style={{ 
        fontSize: "2rem", 
        fontWeight: "600",
        color: "var(--color-gray-900)",
        marginBottom: "1rem"
      }}>
        Theme Switcher Demo
      </h2>
      
      <p style={{ 
        fontSize: "1rem", 
        color: "var(--color-gray-600)",
        textAlign: "center",
        maxWidth: "500px"
      }}>
        Click the toggle below to switch between light and dark themes. 
        Your preference will be saved automatically.
      </p>

      <AnimatedThemeToggler />

      <div style={{
        marginTop: "2rem",
        padding: "1.5rem",
        background: "var(--color-white)",
        border: "2px solid var(--color-gray-200)",
        borderRadius: "12px",
        boxShadow: "var(--shadow-md)",
        maxWidth: "400px",
        width: "100%"
      }}>
        <h3 style={{ 
          fontSize: "1.25rem", 
          fontWeight: "600",
          color: "var(--color-gray-800)",
          marginBottom: "0.75rem"
        }}>
          Features:
        </h3>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        }}>
          <li style={{ color: "var(--color-gray-600)" }}>✨ Smooth animations</li>
          <li style={{ color: "var(--color-gray-600)" }}>💾 LocalStorage persistence</li>
          <li style={{ color: "var(--color-gray-600)" }}>🎨 CSS variables theming</li>
          <li style={{ color: "var(--color-gray-600)" }}>🌓 System preference detection</li>
          <li style={{ color: "var(--color-gray-600)" }}>📱 Fully responsive</li>
        </ul>
      </div>
    </div>
  );
}

export default AnimatedThemeTogglerDemo;
