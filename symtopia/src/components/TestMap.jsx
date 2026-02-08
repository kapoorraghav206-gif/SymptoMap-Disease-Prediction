import { MapContainer, TileLayer } from 'react-leaflet'

export default function TestMap() {
  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer
        center={[10.8505, 78.6389]}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}
