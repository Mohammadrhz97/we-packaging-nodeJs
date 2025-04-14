"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";
import L from "leaflet";

// Import icon images with ES module style (webpack-compatible)
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

// 🧠 Fix default icon once (no need for useEffect)
const defaultIcon = new Icon({
  iconUrl: icon.src ?? icon,
  iconRetinaUrl: iconRetina.src ?? iconRetina,
  shadowUrl: shadow.src ?? shadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Apply the default icon globally
L.Marker.prototype.options.icon = defaultIcon;

const MapComponent: React.FC = () => {
  const position: LatLngExpression = [35.697255, 51.407106]; // Tehran coords

  return (
    <MapContainer
      center={position}
      zoom={20}
      style={{ height: "340px", width: "80%", borderRadius: "8px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>این موقعیت ما است!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
