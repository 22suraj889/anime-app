import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../UI/Button";
import Style from "./Anime.module.css";
const Anime = ({ title, image, id, setAnimeName }) => {
  const navigate = useNavigate();
  const onClickHandler = (animeId, title) => {
    sessionStorage.setItem("id", animeId);
    title = title.replaceAll(" ", "-");
    sessionStorage.setItem("name", title);
    setAnimeName(title);
    navigate(title);
  };
  return (
    <div className={Style["anime"]}>
      <div className={Style["anime_img"]}>
        <img src={image} alt={title} />
      </div>
      <div className={Style["anime_title"]}>
        <h2>{title}</h2>
      </div>
      <div className={Style["anime_btn"]}>
        <Button onClick={() => onClickHandler(id, title)}>More</Button>
      </div>
    </div>
  );
};

export default Anime;
