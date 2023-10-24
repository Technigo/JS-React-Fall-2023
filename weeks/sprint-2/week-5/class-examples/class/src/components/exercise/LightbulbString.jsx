import { useState } from "react";

export const LightbulbString = () => {
  // Initialize the state for on/off
  const [status, setStatus] = useState("off");

  const toggleLight = () => {
    // Toggle the on/off state
    setStatus((prevStatus) => (prevStatus === "on" ? "off" : "on"));
  };

  // in the component, use the state to toggle classes for the lightbulb (check the css)
  return (
    <div className="lightbulb-container">
      <div className={`lightbulb ${status}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};

// In this modified version, the state variable has been changed from isOn (boolean) to status (string), and now it can take the values of "on" or "off" instead of just true or false. The toggleLight function has been updated to toggle the status between "on" and "off" accordingly.
