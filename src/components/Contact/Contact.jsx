import React, { forwardRef} from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {

  const latitude = -34.45510494430895;
  const longitude = -58.634289065927966;

  return (
    <div ref={ref} className="contact">
      <h2 className="header2">LINKS</h2>
      <div className="contact-content">
        <div className="links">
          <a href="mailto:federicofarias@outlook.com" target="_blank" rel="noopener noreferrer" className="header-link">EMAIL</a>
          <a href="https://linkedin.com/in/federicoefarias" target="_blank" rel="noopener noreferrer" className="header-link">LINKEDIN</a>
          <a href="https://github.com/fridriik" target="_blank" rel="noopener noreferrer" className="header-link">GITHUB</a>
          <a href="https://behance.net/fridriik" target="_blank" rel="noopener noreferrer" className="header-link">BEHANCE</a>
        </div>
        <p className="paragraph1">You can find me around here</p>
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
    </div>
    );
});

export default Contact;
