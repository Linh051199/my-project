import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Combo from "~/components/Combo";
import Tour from "~/components/Tour";

const cx = classNames.bind(styles);

function HomePage() {
  const [dataPhuQuoc, setDataPhuQuoc] = useState([]);
  const [dataNinhBinh, setDataNinhBinh] = useState([]);
  const [dataQuangNinh, setDataQuangNinh] = useState([]);
  const [dataTour, setDataTour] = useState([]);

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
        <div className={cx("home__combo__list")}>
          {dataPhuQuoc.map((item) => (
            <Combo
              key={item.id}
              src={item.src}
              className={cx("home__combo__item")}
              title={item.title}
              number={item.number}
              width="330px"
              height="330px"
            />
          ))}

          {dataNinhBinh.map((item) => (
            <Combo
              key={item.id}
              src={item.src}
              className={cx("home__combo__item")}
              title={item.title}
              number={item.number}
              width="330px"
              height="330px"
            />
          ))}

          {dataQuangNinh.map((item) => (
            <Combo
              key={item.id}
              src={item.src}
              className={cx("home__combo__item")}
              title={item.title}
              number={item.number}
              width="330px"
              height="330px"
            />
          ))}
        </div>
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
