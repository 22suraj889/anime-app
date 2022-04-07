import React, { useState } from "react";
import Anime from "./Anime/Anime";
import Style from "./Home.module.css";
import Navbar from "./Navbar/Navbar";
const Home = ({ data, setAnimeName }) => {
  const [search, setSearch] = useState("");

  if (search.trim().length > 0) {
    data = data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  }
  return (
    <>
      <Navbar setSearch={setSearch} search={search} />
      <div className={Style["home"]}>
        {data.length !== 0 ? (
          data.map((item) => (
            <Anime
              key={item.id}
              title={item.title}
              image={item.image}
              id={item.id}
              setAnimeName={setAnimeName}
            />
          ))
        ) : (
          <h2>No result found</h2>
        )}
      </div>
    </>
  );
};

export default Home;
