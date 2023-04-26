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
          src="https://statics.vntrip.vn/data-v2/data-guide/img_content/1470302452_anh-5.jpg"
          width="250px"
          height="220px"
        />
        <ComboTourList
          data={dataQuangNinh}
          title="Quảng Ninh"
          src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-Ha-Long.jpg"
          width="250px"
          height="220px"
        />
        <ComboTourList
          data={dataNinhBinh}
          title="Ninh Bình"
          src="https://motogo.vn/wp-content/uploads/2019/10/a2_IENS.jpg"
          width="250px"
          height="220px"
        />
      </div>
    </div>
  );
}

export default ComboPage;
