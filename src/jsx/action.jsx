import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "../common-component/footer";
import Header from "../common-component/header";
import "../css/action.css";

const MAP_API_KEY = import.meta.env.VITE_MAP_API;

function ChangeMapView({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 14);
    }
  }, [coords]);
  return null;
}

function Action() {
  const [position, setPosition] = useState([20.5937, 78.9629]);
  const [location, setLocation] = useState("");
  const [fileName, setFileName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const imageInputRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      });
    }
  }, []);

  const updateMapFromInput = async (event) => {
    const value = event.target.value;
    setLocation(value);
    if (value) {
      try {
        const response = await fetch(
          `https://us1.locationiq.com/v1/search.php?key=${MAP_API_KEY}&q=${value}&format=json`
        );
        const data = await response.json();
        if (data.length > 0) {
          setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }
  };

  const updateInputFromMarker = async (e) => {
    const lat = e.target.getLatLng().lat;
    const lon = e.target.getLatLng().lng;
    setPosition([lat, lon]);

    try {
      const response = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=${MAP_API_KEY}&lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      if (data.display_name) {
        setLocation(data.display_name);
      }
    } catch (error) {
      console.error("Error fetching reverse geolocation data:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source src="/action.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Header />
      <main>
        <div className="action-layout">
          {/* Left Section: Form */}
          <div className="action-left">
            <form id="action-report-form" onSubmit={submitForm}>
              <h1 className="action-text-center">Report an Incident</h1>

              <div className="action-form-field">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>

              <div className="action-form-field">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />
              </div>

              <div className="action-form-field">
                <label htmlFor="address">Your Address:</label>
                <input type="text" id="address" name="address" placeholder="Your Address" required />
              </div>

              <div className="action-form-field">
                <label htmlFor="location">Location of Pollution:</label>
                <input
                  type="text"
                  id="location"
                  name="locationPollution"
                  placeholder="Enter Location"
                  value={location}
                  onChange={updateMapFromInput}
                  required
                />
              </div>

              <div className="action-form-field">
                <label htmlFor="type-of-pollution">Type of Pollution:</label>
                <select id="type-of-pollution" name="typeOfPollution" required>
                  <option value="">Select</option>
                  <option value="organic-waste">Organic Waste</option>
                  <option value="oil-spill">Oil Spill</option>
                  <option value="industrial-waste">Industrial Waste</option>
                  <option value="sewage-discharge">Sewage Discharge</option>
                </select>
              </div>

              <div className="upload-container">
                <label htmlFor="image-input" className="upload-button">
                  {fileName || "Upload Image"}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="image-input"
                  ref={imageInputRef}
                  onChange={handleFileChange}
                />
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Uploaded Preview" />
                  </div>
                )}
              </div>

              <button type="submit" className="submit-button">Submit Report</button>
            </form>
          </div>

          {/* Right Section: Map */}
          <div className="action-right">
            <div className="map-container">
              <MapContainer center={position} zoom={14} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ChangeMapView coords={position} />
                <Marker position={position} draggable eventHandlers={{ dragend: updateInputFromMarker }}>
                  <Popup>Drag the marker to refine the location.</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Action;
