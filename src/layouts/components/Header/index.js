import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import config from "../../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  const [showMenu, setShowMenu] = React.useState(true);

  const handleClickShowMenu = () => {
    console.log("toggle");
    setShowMenu(!showMenu);
  };

  const classes = cx(showMenu ? "sidenav" : "sidenav__responsive");

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
      <div className={classes}>
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
      )
      <div className={cx("sivenav__media")} onClick={handleClickShowMenu}>
        <FontAwesomeIcon
          className={cx("sivenav__mediaBtn")}
          icon={faBars}
          id="check"
        />
      </div>
    </div>
  );
}

export default Header;
