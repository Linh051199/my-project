import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import config from "../../../config";

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <Link to={config.routes.home}>
          <img
            className={cx("logo__img")}
            src="http://dulich14.maugiaodien.com/wp-content/uploads/2021/05/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className={cx("sidenav")}>
        <Link className={cx("sidenav__item")} to={config.routes.home}>
          Trang Chủ
        </Link>

        <Link className={cx("sidenav__item")} to={config.routes.combo}>
          Combo
        </Link>

        <Link className={cx("sidenav__item")} to={config.routes.tour}>
          Tour
        </Link>

        <Link className={cx("sidenav__item")} to={config.routes.hotel}>
          Hotel & Resort
        </Link>

        <Link className={cx("sidenav__item")} to={config.routes.duThuyen}>
          Du thuyền
        </Link>

        <Link className={cx("sidenav__item")} to={config.routes.lienHe}>
          Liên hệ
        </Link>
      </div>
    </div>
  );
}

export default Header;
