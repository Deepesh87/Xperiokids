import React from "react";
import { PopupWidget } from "react-calendly";

function Calandly() {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/xperiokids"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule a free Demo!"
        textColor="#ffffff"
        color="#21654E"
      />
    </div>
  );
};

export default Calandly;