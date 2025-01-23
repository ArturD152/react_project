import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="section5">
      <h1 className="section5__title">Карта города</h1>
      <div className="section5__ya" style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Яндекс Карты
        </a>
        <a
          href="https://yandex.ru/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&utm_medium=mapframe&utm_source=maps&z=9.57"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Москва — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.385439%2C55.584227&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=9.57"
          width="1120"
          height="800"
          allowFullScreen="true"
          style={{ position: "relative" }}
          title="Yandex Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;