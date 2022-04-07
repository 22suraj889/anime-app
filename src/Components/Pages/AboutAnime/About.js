import React, { useEffect, useState } from "react";
import Info from "./Info";
import Style from "./About.module.css";

const About = ({ data }) => {
  const [anime, setAnime] = useState({});
  const filterDataHandler = () => {
    const [filteredData] = data.filter(
      (item) => item.id === sessionStorage.getItem("id")
    );
    setAnime(filteredData);
  };
  useEffect(() => {
    filterDataHandler();
  });
  return (
    <div className={Style["anime_details"]}>
      <div className={Style["anime_details__title"]}>
        <h1>{anime.title}</h1>
        <h2>{anime.original_title}</h2>
      </div>
      <div className={Style["anime_details__image"]}>
        <img src={anime.image} alt={anime.title} />
      </div>
      <div className={Style["anime_details__info"]}>
        <p>Anime Info:</p>
        <Info anime={anime} />
      </div>
      <div className={Style["anime_details__description"]}>
        <p>Storyline:</p>
        <p>{anime.description}</p>
        <div className={Style["anime_details__banner"]}>
          <img src={anime.movie_banner} alt={anime.title} />
        </div>
      </div>
    </div>
  );
};

export default About;
