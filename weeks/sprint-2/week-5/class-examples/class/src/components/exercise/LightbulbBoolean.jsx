import { useState } from "react";

export const LightbulbBoolean = () => {
  // Initialize the state for on/off
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    // Toggle the on/off state
    setIsOn((prevIsOn) => !prevIsOn);
  };

  // in the component, use the state to toggle classes for the lightbulb (check the css)
  return (
    <div className="lightbulb-container">
      <div className={`lightbulb ${isOn ? "on" : "off"}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
