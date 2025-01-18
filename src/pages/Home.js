import React, {useState} from "react";
import walkingImage from "../components/assets/img/walking.webp";
import '../styles/Home.css'
import museum1 from '../components/assets/img/museum1.png'
import museum2 from '../components/assets/img/museum2.jpg'
import museum3 from '../components/assets/img/museum3.jpg'
import museum4 from '../components/assets/img/museum4.webp'
import museum5 from '../components/assets/img/museum5.webp'
import Theaters from '../components/theaters/Theaters.js'
import MapSection from '../components/MapSection/MapSection.js'

const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [museum1, museum2, museum3, museum4, museum5];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container">
    <section className="section">
      <div className="section__block1">
        <h1 className="section__block1__title">Прогулки по паркам</h1>
        <p className="section__block1__text">
          Аллеи, бульвары и набережные, пронизанные осенним солнцем, становятся
          буквально золотыми! Самое время отдохнуть от городской суеты и пробежать
          свой первый осенний марафон. Делимся идеями для самых красивых прогулок
          и пробежек по паркам.
        </p>
        <button className="section__block1__btn">Выбрать маршрут</button>
      </div>
      <div className="section__block2">
        <div className="section__block2__wrap">
          <img
            src={walkingImage} 
            alt="img_walking"
            className="section__block2__picture"
          />
        </div>
      </div>
    </section>
    <section className="section2">
        <h2 className="section2__title">Музеи</h2>
        <div className="section2__slider">
          <div className="section2__slider-images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Музей ${index + 1}`}
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div>
          <button className="section__slider-prevBtn" onClick={prevImage}>
          &#8592;
          </button>
          <button className="section__slider-nextBtn" onClick={nextImage}>
          &#8594;
          </button>
        </div>
      </section>

      <Theaters />

      <MapSection />

      
    </div>
);
};

export default Home;