import React from "react";

const Navbar = ({ sethome, home }) => {
  return (
    <div>
      <div class="gap-2 Navbar">
        <button
          className={`btn btn-secondary NavbarEle ${
            home === "Home" ? "active" : ""
          } `}
          type="button"
          onClick={() => {
            sethome("Home");
          }}
        >
          Add Password
        </button>
        <button
          className={`btn btn-secondary NavbarEle ${
            home === "DataBase" ? "active" : ""
          } `}
          type="button"
          onClick={() => {
            sethome("DataBase");
          }}
        >
          View Passwords
        </button>
      </div>
    </div>
  );
};

export default Navbar;
