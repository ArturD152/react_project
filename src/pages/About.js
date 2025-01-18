import React from "react";
import longImage from '../components/assets/img/image_long.png'
import '../styles/About.css'

const About = () => {
  return (
    <div>
      <section className="section_about">
          <div>
            <h1 className="section__title">
                О компании «Local Guide»
            </h1>
            <div className="section__block">                
                <p className="section__text">
                    Добро пожаловать в наш путеводитель по городу!
                    Откройте для себя город с нами!
                    Наш сайт - ваш незаменимый спутник в путешествии по удивительному городу. Будь то ваш первый визит или возвращение, мы поможем вам открыть все его тайны и красоты.
                </p>
            </div>
          </div>
            <div className="section__block2">
                <p className="section__text-s">
                    Что мы предлагаем:
                </p>
                <div className="section__flex">
                    <div className="section__block">
                        <h1 className="section__num">
                            01
                        </h1>
                        <h3 className="section__title">
                            Подробные маршруты
                        </h3>
                        <p className="section__main-text">
                            Откройте для себя самые интересные места города с помощью наших проработанных маршрутов. Мы предлагаем пути для любого вкуса - от культурных экскурсий до увлекательных приключений.
                        </p>
                    </div>
                    <div className="section__block">
                        <h1 className="section__num">
                            02
                        </h1>
                        <h3 className="section__title">
                            Интерактивные карты
                        </h3>
                        <p className="section__main-text">
                            Легко ориентируйтесь в городе с помощью наших интерактивных карт. Найдите ближайшие достопримечательности, кафе, магазины и многое другое.
                        </p>
                    </div>
                    <div className="section__block">
                        <h1 className="section__num">
                            03
                        </h1>
                        <h3 className="section__title">
                            Актуальная информация
                        </h3>
                        <p className="section__main-text">
                            Мы регулярно обновляем информацию о событиях, выставках, фестивалях и других интересных мероприятиях в городе.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section__block3">
                <img src={longImage} alt=""/>
            </div>
        </section>
    </div>
)
};

export default About;