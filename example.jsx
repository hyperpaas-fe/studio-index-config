import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/index";

function RenderDemo(props) {
  return (
    <div className="playground-wrapper">
      <div className="playground-container">
        <App />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(RenderDemo)
);
