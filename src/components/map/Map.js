import React from "react";
import { MapSectionContainer } from "./map.styles";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pinIcon from "../../assets/images/pin.png";
import { Icon } from "leaflet";
import localdb from "../../utils/localdb";

const Map = () => {
  return (
    <MapSectionContainer>
      <MapContainer center={[localdb.bsLocation.lat, localdb.bsLocation.long]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker
          position={[localdb.bsLocation.lat, localdb.bsLocation.long]}
          icon={new Icon({ iconUrl: pinIcon, iconSize: [50, 50] })}
          eventHandlers={{
            click: () => {
              window.open(`https://www.google.com/maps/dir//${localdb.bsLocation.lat},%20${localdb.bsLocation.long}`, "_blank");
            }
          }}
        >
        </Marker>
      </MapContainer>
    </MapSectionContainer>
  );
};

export default Map;