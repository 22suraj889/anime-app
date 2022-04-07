import { TextField } from "@mui/material";
import React from "react";
import Style from "./Navbar.module.css";
const Navbar = ({ setSearch, search }) => {
  return (
    <div className={Style["navbar"]}>
      <div className={Style["navbar_title"]}>
        <h1>Anime</h1>
      </div>
      <div className={Style["navbar_search"]}>
        <TextField
          id="filled-search"
          label="Search"
          type="search"
          variant="filled"
          style={{ background: "white", fontSize: "1.3rem" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
