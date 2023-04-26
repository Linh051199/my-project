import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Hotel.module.scss";
import Banner from "~/components/Banner";
import HotelItem from "./HotelItem";

const cx = classNames.bind(styles);

function HotelPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/hotel")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);
  return (
    <div className={cx("wrapper")}>
      <Banner title="Hotel & Resort" />
      <div className={cx("content")}>
        {data.map((item) => (
          <HotelItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default HotelPage;
