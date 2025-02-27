// import "../css/action.css";
import React, { useRef } from "react";
import Footer from "../common-component/footer";
import Header from "../common-component/header";

function Action() {
  const mapRef = useRef(null);
  const imageInputRef = useRef(null);
  const uploadedImageRef = useRef(null);

  const showLocationOnMap = (event) => {
    // Handle showing location on the map
  };

  const submitForm = (event) => {
    event.preventDefault();
    // Handle form submission
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
        <div className="container1">
        <form id="report-form" action="/Report" method="POST">
            <h1 className="text-center1">Report an Incident</h1>

            <div className="form-field">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-field">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" placeholder="Date" required />
            </div>

            <div className="form-field">
              <label htmlFor="address">Your Address:</label>
              <input type="text" id="address" name="address" placeholder="Your Address" required />
            </div>

            <div className="form-field">
              <label htmlFor="contact">Contact Number:</label>
              <input type="tel" id="contact" name="contact" placeholder="Contact Number" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" placeholder="Email Address" required />
            </div>

            <div className="form-field">
              <label htmlFor="location-pollution">Location of Pollution:</label>
              <input
                type="text"
                id="location-pollution"
                name="locationPollution"
                placeholder="Location"
                required
                autoComplete="on"
                onChange={showLocationOnMap}
              />
            </div>
            <div id="map" ref={mapRef}></div>

            <div className="form-field">
              <label htmlFor="type-of-pollution">Type of Pollution:</label>
              <select id="type-of-pollution" name="typeOfPollution" required>
                <option value=""></option>
                <option value="Organic-Waste">Organic-Waste</option>
                <option value="oil_spill">Oil Spill</option>
                <option value="industrial_waste">Industrial Waste</option>
                <option value="sewage_discharge">Sewage Discharge</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="area-of-pollution">Area of Pollution:</label>
              <select id="area-of-pollution" name="areaOfPollution" required>
                <option value=""></option>
                <option value="pond">Pond</option>
                <option value="River">River</option>
                <option value="Sea">Sea</option>
                <option value="Canal">Canal</option>
                <option value="Ocean">Ocean</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="polybags-present">Polybags Present:</label>
              <select id="polybags-present" name="polybagsPresent" required>
                <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <label htmlFor="image-input" className="upload-button">
              <svg viewBox="0 0 640 512" fill="white" height="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
              </svg> Choose Image
            </label>
            <input
              type="file"
              accept="image/*"
              capture="camera"
              id="image-input"
              className="form-field1"
              ref={imageInputRef}
            />
            <div id="image-container">
              <img id="uploaded-image" alt="Uploaded" ref={uploadedImageRef} />
            </div>
            <button type="submit" className="submitBtn form-submit" onClick={() => submitForm()}>
              Submit
              <svg fill="white" viewBox="0 0 448 512" height="1em" className="arrow">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Action;
