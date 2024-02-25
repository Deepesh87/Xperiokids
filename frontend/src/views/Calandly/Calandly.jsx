import React from "react";
import { PopupWidget } from "react-calendly";

function Calandly() {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/xperiokids"
        rootElement={document.getElementById("root")}
        text="Click here to schedule a free Demo!"
        textColor="#ffffff"
        color="#21654E"
      />
    </div>
  );
};

export default Calandly;