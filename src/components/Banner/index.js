import React from "react";
import classNames from "classnames/bind";

import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);
function Banner({ title }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner__img")}></div>
      <span className={cx("banner")}>
        <span className={cx("banner__title")}>{title}</span>
      </span>
    </div>
  );
}

export default Banner;
