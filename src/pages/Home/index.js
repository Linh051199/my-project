import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Combo from "~/components/Combo";
import Tour from "~/components/Tour";
import { Link, useNavigate } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function HomePage() {
  const [dataPhuQuoc, setDataPhuQuoc] = useState([]);
  const [dataNinhBinh, setDataNinhBinh] = useState([]);
  const [dataQuangNinh, setDataQuangNinh] = useState([]);
  const [dataTour, setDataTour] = useState([]);

  const navigate = useNavigate();
  const toComboItem = () => {
    navigate(config.routes.comboItem, { state: { id: 1, name: "sabaoon" } });
  };

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/phuquoc")
      .then((response) => response.json())
      .then((data) => {
        setDataPhuQuoc(data);
      })
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/ninhbinh")
      .then((response) => response.json())
      .then((data) => {
        setDataNinhBinh(data);
      })
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/quangninh")
      .then((response) => response.json())
      .then((data) => {
        setDataQuangNinh(data);
      })
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/tour")
      .then((response) => response.json())
      .then((data) => {
        setDataTour(data);
      })
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("home__bgImage")}></div>

      <div className={cx("home__combo__hashtag")}>• • • VIETSTARTOUR • • •</div>
      <div className={cx("home__combo__title")}>COMBO DU LỊCH</div>
      <div className={cx("home__combo")}>
        {dataPhuQuoc.map((item) => (
          <Link
            className={cx("home__combo__item")}
            key={item.id}
            to={config.routes.comboItem}
            state={item}
          >
            <Combo
              key={item.id}
              src={item.src}
              title={item.title}
              number={item.number}
              width="330px"
              // height="330px"
              onClick={() => {
                toComboItem();
              }}
            />
          </Link>
        ))}

        {dataNinhBinh.map((item) => (
          <Link
            className={cx("home__combo__item")}
            key={item.id}
            to={config.routes.comboItem}
            state={item}
          >
            <Combo
              key={item.id}
              src={item.src}
              title={item.title}
              number={item.number}
              onClick={() => {
                toComboItem();
              }}
            />
          </Link>
        ))}

        {dataQuangNinh.map((item) => (
          <Link
            className={cx("home__combo__item")}
            key={item.id}
            to={config.routes.comboItem}
            state={item}
          >
            <Combo
              key={item.id}
              src={item.src}
              title={item.title}
              number={item.number}
              onClick={() => {
                toComboItem();
              }}
            />
          </Link>
        ))}
      </div>

      <div className={cx("home__tour")}>
        <div className={cx("home__tour__list")}>
          {dataTour.map((item) => (
            <Tour
              key={item.id}
              width="600px"
              height="300px"
              data={item}
              className={cx("home__tour__item")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
