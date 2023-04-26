import React from "react";
import classNames from "classnames/bind";

import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);
function Banner({ title }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner__img")}></div>
      <span className={cx("banner")}>
        <span className={cx("banner__title")}>{title}</span>
        <span className={cx("banner__link")}>
          <Link className={cx("banner__linkToHome")} to={config.routes.home}>
            Trang chủ
          </Link>
          <span className={cx("banner__linkTitle")}>
            {" > "}
            {title}
          </span>
        </span>
      </span>
    </div>
  );
}

export default Banner;
