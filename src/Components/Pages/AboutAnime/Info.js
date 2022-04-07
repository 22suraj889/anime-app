import React from "react";
import Style from "./Info.module.css";
const Info = ({ anime }) => {
  return (
    <ul className={Style["anime_details__info__details"]}>
      <li>
        <b>Director: </b>
        {anime.director}
      </li>
      <li>
        <b>Producer: </b>
        {anime.producer}
      </li>
      <li>
        <b>Released Date: </b>
        {anime.release_date}
      </li>
      <li>
        <b>Running Time: </b>
        {anime.running_time} min
      </li>
      <li>
        <b>Score: </b>
        {anime.rt_score}
      </li>
    </ul>
  );
};

export default Info;
