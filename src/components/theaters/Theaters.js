import React from "react";
import theatre1 from "../assets/img/theatre1-mini.png";
import theatre2 from "../assets/img/t-mini2.png";
import theatre3 from "../assets/img/t-mini3.png";
import theatre4 from "../assets/img/t-mini4.png";
import theatre5 from "../assets/img/t-mini5.png";
import theatre6 from "../assets/img/t-mini6.png";
import theatre7 from "../assets/img/t-mini7.png";
import theatre8 from "../assets/img/t-mini8.png";
import "./Theaters.css";

const Theaters = () => {
  return (
    <section className="section4">
      <div className="section4__wrap">
        <h1 className="section4__title">Театры</h1>
        <div className="section4__flex" id="itemList">


          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre1} alt="theatre1" />
              <h3 className="section4__block1__title">Большой театр</h3>
              <p className="section4__block1__text">
                Большой театр в Москве был открыт 18 января 1825 года.
              </p>
              <p className="section4__block1__addres">
                Адрес: Театральная площадь, 1.
              </p>
            </div>
          </div>

          
          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre2} alt="theatre2" />
              <h3 className="section4__block1__title">Государственный Театр наций</h3>
              <p className="section4__block1__text">
                Государственный театр наций был открыт 15 ноября 1987 года.
              </p>
              <p className="section4__block1__addres">
                Адрес: Петровский пер., д. 3
              </p>
            </div>
          </div>

          
          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre3} alt="theatre3" />
              <h3 className="section4__block1__title">Театр им. Евгения Вахтангова</h3>
              <p className="section4__block1__text">
                Театр имени Евгения Вахтангова был открыт 13 ноября 1921 года.
              </p>
              <p className="section4__block1__addres">
                Адрес: г. Москва, ул. Арбат, д. 26
              </p>
            </div>
          </div>

          
          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre4} alt="theatre4" />
              <h3 className="section4__block1__title">
                Московский государственный академический детский музыкальный театр
                имени Н.И. Сац
              </h3>
              <p className="section4__block1__text">
                21 ноября 1965 года — дата открытия Московского театра.
              </p>
              <p className="section4__block1__addres">
                Адрес: г. Москва, пр-кт. Вернадского, д. 5
              </p>
            </div>
          </div>

          
          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre5} alt="theatre5" />
              <h3 className="section4__block1__title">
                Российский государственный театр «Сатирикон» имени Аркадия Райкина
              </h3>
              <p className="section4__block1__text">
                Российский государственный театр «Сатирикон» имени Аркадия Райкина был
                открыт 6 сентября 1939 года.
              </p>
              <p className="section4__block1__addres">
                Адрес: г. Москва, ул. Шереметьевская, д. 8
              </p>
            </div>
          </div>

          
          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre6} alt="theatre6" />
              <h3 className="section4__block1__title">
                Московский государственный театр «Ленком»
              </h3>
              <p className="section4__block1__text">
                Большой театр в Москве был открыт 18 января 1825 года.
              </p>
              <p className="section4__block1__addres">
                Адрес: ул. Дмитровка М., д. 6/1
              </p>
            </div>
          </div>

          
          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre7} alt="theatre7" />
              <h3 className="section4__block1__title">
                Театр Маяковского. Основная сцена
              </h3>
              <p className="section4__block1__text">
                Большой театр в Москве был открыт 18 января 1825 года.
              </p>
              <p className="section4__block1__addres">
                Адрес: г. Москва, ул. Никитская Б., д. 19/13
              </p>
            </div>
          </div>

          
          <div className="section4__block1">
            <div className="section4__block1-to_img">
              <img src={theatre8} alt="theatre8" />
              <h3 className="section4__block1__title">Московский театр на Таганке</h3>
              <p className="section4__block1__text">
                Большой театр в Москве был открыт 18 января 1825 года.
              </p>
              <p className="section4__block1__addres">
                Адрес: г. Москва, ул. Земляной Вал, д. 76/21
              </p>
            </div>
          </div>
        </div>

        
        <div className="section4__block__bottom-btn">
          <a href="./theater/index.html">
            <button className="section4__bottom-btn">Узнать больше</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Theaters;