import React, { forwardRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";

const ChangeMapView = ({ coords, zoom }) => {
  const map = useMap();
  map.setView(coords, zoom);
  return null;
};

const Contact = forwardRef((props, ref) => {
  const defaultView = {
    coords: [-34.45457553761491, -58.6346133687528],
    zoom: 14
  };

  const [mapView, setMapView] = useState(defaultView);

  const areas = {
    localidad: {
      coords: defaultView.coords,
      zoom: 14
    },
    municipio: {
      coords: defaultView.coords,
      zoom: 11
    },
    provincia: {
      coords: [-36.84175521386984, -59.95621004783435],
      zoom: 6
    },
    pais: {
      coords: [-35.142126865772205, -65.0429627259267],
      zoom: 3
    }
  };

  const highlightArea = (area) => {
    const view = areas[area] || defaultView;
    setMapView(view);
  };

  return (
    <div ref={ref} className="contact">
      <p className='paragraph1'>
        ¡Si estás buscando alguien con enfoque creativo y una mentalidad analítica, encontrame por acá para darte una mano!
      </p>
      <div className="contact-content">
        <div className="links">
          <a href="mailto:federicofarias@outlook.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
          <a href="https://behance.net/fridriik" target="_blank" rel="noopener noreferrer">B&#274;HANCE</a>
          <a href="https://linkedin.com/in/federicoefarias" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://github.com/fridriik" target="_blank" rel="noopener noreferrer">GITHUB</a>
        </div>
        <ul>
          <li onMouseOver={() => highlightArea('localidad')} className="header4">_GENERAL PACHECO _</li>
          <li onMouseOver={() => highlightArea('municipio')} className="header4">_ GBA NORTE _</li>
          <li onMouseOver={() => highlightArea('provincia')} className="header4">_ PROVINCIA BSAS _</li>
          <li onMouseOver={() => highlightArea('pais')} className="header4">_ ARGENTINA_</li>
        </ul>
        <MapContainer
          center={mapView.coords}
          zoom={mapView.zoom}
          style={{ height: "400px", width: "100%", border: "solid azure", zIndex: "0"}}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeMapView coords={mapView.coords} zoom={mapView.zoom} />
        </MapContainer>
      </div>
      <a href="https://www.instagram.com/fridriik_/" target="_blank" rel="noopener noreferrer">
        <p className='paragraph1'>
          Y si de casualidad te copa Nine Inch Nails, Queens Of The Stone Age, Hellsing, Dorohedoro, el asado, los tattoos y otras cosas más, acá estoy!
        </p>
      </a>
    </div>
  );
});

export default Contact;
