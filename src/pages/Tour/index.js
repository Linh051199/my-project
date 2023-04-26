import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Tour.module.scss";
import Banner from "~/components/Banner";
import Tour from "~/components/Tour";

const cx = classNames.bind(styles);

function TourPage() {
  const [dataTour, setDataTour] = useState([]);

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
      <Banner title="Tour" />
      <div className={cx("content")}>
        {dataTour.map((item) => (
          <Tour
            key={item.id}
            width="400px"
            height="250px"
            data={item}
            className={cx("tour__item")}
          />
        ))}
      </div>
    </div>
  );
}

export default TourPage;
