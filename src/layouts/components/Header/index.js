import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import config from "../../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  // const [showMenu, setShowMenu] = React.useState(true);

  // const handleClickShowMenu = () => {
  //   console.log("toggle");
  //   setShowMenu(!showMenu);
  // };

  // const classes = cx({
  //   sidenav__responsive: true,
  //   sidenav__responsive: !showMenu,
  //   open: !showMenu,
  // });

  // (showMenu ? "sidenav" : "sidenav__responsive");

  return (
    <div className={cx("wrapper")}>
      <Link to={config.routes.home}>
        <div className={cx("logo")}></div>
      </Link>
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

      {/* <div className={classes}>
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
      </div> */}
      {/* <div className={cx("sivenav__media")} onClick={handleClickShowMenu}>
        <FontAwesomeIcon
          className={cx("sivenav__mediaBtn")}
          icon={faBars}
          id="check"
        />
      </div> */}
    </div>
  );
}

export default Header;
