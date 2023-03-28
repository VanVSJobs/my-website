import React from "react";

const MatrixTextbox = ({ text }) => {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        border: "2px solid green",
        color: "white",
        padding: "10px",
      }}
    >
      {text}
    </div>
  );
};

export default MatrixTextbox;
