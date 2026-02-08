import ScrollArea from "./ScrollArea";
import ProgressiveBlur from "./ProgressiveBlur";
import "./ProgressiveBlurDemo.css";

function ProgressiveBlurDemo() {
  return (
    <div className="progressive-blur-demo">
      <ScrollArea className="progressive-blur-scroll" style={{ height: "400px" }}>
        <div className="progressive-blur-content">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="progressive-blur-item">
              {index}
            </div>
          ))}
        </div>
        <ProgressiveBlur position="bottom" height="40%" />
      </ScrollArea>
    </div>
  );
}

export default ProgressiveBlurDemo;
