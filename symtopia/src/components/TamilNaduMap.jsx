import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useRef } from 'react';
import districtGeoJSON from '../data/tamil_nadu_districts.geojson';
import { getDistrictColor, getRiskLevel } from '../utils/mapHelpers';

export default function TamilNaduMap({ districtData }) {
  const geoJsonRef = useRef();

  const getFeatureStyle = (feature) => {
    const districtName = feature.properties.district;
    const caseCount = districtData[districtName] || 0;
    const color = getDistrictColor(caseCount);

    return {
      fillColor: color,
      weight: 2,
      opacity: 1,
      color: '#334155',
      fillOpacity: 0.7
    };
  };

  const onEachFeature = (feature, layer) => {
    const districtName = feature.properties.district;
    const caseCount = districtData[districtName] || 0;
    const riskLevel = getRiskLevel(caseCount);

    const tooltipContent = `
      <div style="font-family: sans-serif; padding: 4px;">
        <strong style="font-size: 14px; color: #1e293b;">${districtName}</strong><br/>
        <span style="font-size: 12px; color: #475569;">Cases: <strong>${caseCount}</strong></span><br/>
        <span style="font-size: 12px; color: #475569;">Risk: <strong>${riskLevel}</strong></span>
      </div>
    `;

    layer.bindTooltip(tooltipContent, {
      sticky: true,
      className: 'custom-tooltip'
    });

    layer.on({
      mouseover: (e) => {
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          color: '#0f172a',
          fillOpacity: 0.9
        });
      },
      mouseout: (e) => {
        if (geoJsonRef.current) {
          geoJsonRef.current.resetStyle(e.target);
        }
      }
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ height: '600px', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <MapContainer
          center={[10.8505, 78.6389]}
          zoom={7}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON
            ref={geoJsonRef}
            data={districtGeoJSON}
            style={getFeatureStyle}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </div>

      <MapLegend />
    </div>
  );
}

function MapLegend() {
  const legendItems = [
    { color: '#ef4444', label: 'High Risk (>30 cases)', range: '> 30' },
    { color: '#f59e0b', label: 'Medium Risk (11-30 cases)', range: '11-30' },
    { color: '#22c55e', label: 'Low Risk (1-10 cases)', range: '1-10' },
    { color: '#e2e8f0', label: 'No Data', range: '0' }
  ];

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      fontFamily: 'sans-serif'
    }}>
      <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
        Outbreak Intensity
      </h4>
      {legendItems.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{
            width: '24px',
            height: '18px',
            backgroundColor: item.color,
            marginRight: '8px',
            borderRadius: '3px',
            border: '1px solid #cbd5e1'
          }}></div>
          <span style={{ fontSize: '12px', color: '#475569' }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
