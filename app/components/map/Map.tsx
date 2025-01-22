"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";


const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const MapComponent = () => {
  return (
    <div className="container h-[25rem] w-[90%] md:w-full m-auto mt-16">
      <MapContainer
        center={[38.92331475053653, -77.22152638166544]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[38.92331475053653, -77.22152638166544]}>
          <Popup>
            Entertab company<br /> for IT solutions.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
