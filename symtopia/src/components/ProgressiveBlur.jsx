import "./ProgressiveBlur.css";

function ProgressiveBlur({ position = "bottom", height = "40%" }) {
  const positionClass = `progressive-blur-${position}`;
  
  return (
    <div 
      className={`progressive-blur ${positionClass}`}
      style={{ 
        [position === "top" || position === "bottom" ? "height" : "width"]: height 
      }}
      aria-hidden="true"
    />
  );
}

export default ProgressiveBlur;
