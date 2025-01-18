import React from "react";
import mapPin from "../assets/img/Map_Pin.png";
import "./Info.css";

const Info = () => {
  return (
    <div className="header__info">
      <p className="header__mail">info@localguide.ru</p>
      <div className="header__city">
        <img src={mapPin} alt="" />
        <p className="header__moscow">Москва</p>
      </div>
    </div>
  );
};

export default Info;