import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Combo.module.scss";
import Banner from "~/components/Banner";
import ComboTourList from "~/components/ComboTourList";

const cx = classNames.bind(styles);

function ComboPage() {
  const [dataPhuQuoc, setDataPhuQuoc] = useState([]);
  const [dataQuangNinh, setDataQuangNinh] = useState([]);
  const [dataNinhBinh, setDataNinhBinh] = useState([]);

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/phuquoc")
      .then((response) => response.json())
      .then((data) => {
        setDataPhuQuoc(data);
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
    fetch("https://instagram-data.onrender.com/ninhbinh")
      .then((response) => response.json())
      .then((data) => {
        setDataNinhBinh(data);
      })
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);

  return (
    <div className={cx("wrapper")}>
      <Banner className={cx("banner")} title="Combo" />
      <div className={cx("content")}>
        <ComboTourList
          data={dataPhuQuoc}
          title="Phú Quốc"
          src="http://dulich14.maugiaodien.com/wp-content/uploads/2021/05/coto.png"
          width="250px"
          height="220px"
        />
        <ComboTourList
          data={dataQuangNinh}
          title="Quảng Ninh"
          src="http://dulich14.maugiaodien.com/wp-content/uploads/2021/05/quynhon.png"
          width="250px"
          height="220px"
        />
        <ComboTourList
          data={dataNinhBinh}
          title="Ninh Bình"
          src="http://dulich14.maugiaodien.com/wp-content/uploads/2021/05/sapa.png"
          width="250px"
          height="220px"
        />
      </div>
    </div>
  );
}

export default ComboPage;
