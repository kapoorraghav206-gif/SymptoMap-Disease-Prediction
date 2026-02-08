import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function SafeMap() {
  const [mapError, setMapError] = useState(false);

  if (mapError) {
    return (
      <div style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        border: "1px solid #dee2e6",
        borderRadius: "8px",
        color: "#6c757d"
      }}>
        <p>Map unavailable. Please check your internet connection.</p>
      </div>
    );
  }

  try {
    return (
      <div style={{ width: "100%", height: "500px", borderRadius: "8px", overflow: "hidden", border: "1px solid #dee2e6" }}>
        <MapContainer
          center={[10.8505, 78.6101]}
          zoom={7}
          style={{ width: "100%", height: "100%" }}
          whenReady={() => console.log("Map loaded successfully")}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            onError={() => setMapError(true)}
          />
        </MapContainer>
      </div>
    );
  } catch (error) {
    console.error("Map rendering error:", error);
    return (
      <div style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        border: "1px solid #dee2e6",
        borderRadius: "8px",
        color: "#6c757d"
      }}>
        <p>Map failed to load.</p>
      </div>
    );
  }
}

export default SafeMap;
