import React from "react";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";
export const Nav = ({ toggeldark }) => {
  return (
    <div className="pair_navbar">
      <div className="pair_links">
        <NavLink
          onClick={() => window.scroll(0, 0)}
          exact
          to="/"
          activeClassName="activeLink"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            if (JSON.parse(window.localStorage.getItem("cardarray") === "")) {
              alert(
                "You must add at least one item before going to Saved page!"
              );
              window.location.pathname = "";
            }

            window.scroll(0, 0);
          }}
          to="/card/saved"
          activeClassName="activeLink"
        >
          Saved
        </NavLink>
      </div>
      <div>
        <Switch toggeldark={toggeldark} />
      </div>
    </div>
  );
};
