import React, { forwardRef} from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {

  const latitude = -34.45510494430895;
  const longitude = -58.634289065927966;

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
          <MapContainer
              center={[latitude, longitude]}
              zoom={11}
              style={{ height: "400px", width: "100%", border: "solid azure", zIndex: "0"}}
          >
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
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
