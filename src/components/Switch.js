import React from "react";

const Switch = ({ toggeldark }) => {
  return (
    <div>
      <label className="label">
        <i
          className="far fa-moon"
          style={
            localStorage.getItem("dark") === "false"
              ? { color: "#eee" }
              : { color: "#aaa" }
          }
        ></i>
        <input
          type="checkbox"
          className="input"
          onChange={() => toggeldark()}
        />
        <span className="check_span"></span>

        <i
          className="fas fa-sun"
          style={
            localStorage.getItem("dark") === "true"
              ? { color: "rgb(255, 187, 42)" }
              : { color: "#555" }
          }
        ></i>
      </label>
    </div>
  );
};
export default Switch;
