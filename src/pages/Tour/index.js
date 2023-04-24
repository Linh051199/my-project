import React from "react";
import classNames from "classnames/bind";

import styles from "./Tour.module.scss";

const cx = classNames.bind(styles);

function TourPage() {
  return <div className={cx("wrapper")}>TourPage</div>;
}

export default TourPage;
