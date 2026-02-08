import { forwardRef } from "react";
import "./ScrollArea.css";

const ScrollArea = forwardRef(({ children, className = "", style = {} }, ref) => {
  return (
    <div 
      ref={ref}
      className={`scroll-area ${className}`}
      style={style}
    >
      {children}
    </div>
  );
});

ScrollArea.displayName = "ScrollArea";

export default ScrollArea;
