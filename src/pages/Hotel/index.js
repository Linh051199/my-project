import React from "react";
import classNames from "classnames/bind";

import styles from "./Hotel.module.scss";

const cx = classNames.bind(styles);

function HotelPage() {
  return <div className={cx("wrapper")}>HotelPage</div>;
}

export default HotelPage;
