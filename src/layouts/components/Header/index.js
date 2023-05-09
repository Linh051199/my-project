import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import config from "../../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <Link className={cx("logo")} to={config.routes.home}>
        <div className={cx("logo__img")}> </div>
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

      <div className={cx("sivenav__media")}>
        <label htmlFor="sidenav__responsiveInput">
          <FontAwesomeIcon
            className={cx("sivenav__mediaBtn")}
            icon={faBars}
            id="check"
          />
        </label>
      </div>

      <input
        type="checkbox"
        hidden
        className={cx("sidenav__responsiveInput")}
        id="sidenav__responsiveInput"
      />

      <label
        htmlFor="sidenav__responsiveInput"
        className={cx("sidenav__overlay")}
      ></label>
      <nav className={cx("responsive")}>
        <label htmlFor="sidenav__responsiveInput">
          <FontAwesomeIcon
            className={cx("sidenav__responsiveCloseBtn")}
            icon={faXmark}
          />
        </label>
        <div className={cx("sidenav__responsive")}>
          <Link
            className={cx("sidenav__responsiveItem")}
            to={config.routes.home}
          >
            Trang Chủ
          </Link>

          <Link
            className={cx("sidenav__responsiveItem")}
            to={config.routes.combo}
          >
            Combo
          </Link>

          <Link
            className={cx("sidenav__responsiveItem")}
            to={config.routes.tour}
          >
            Tour
          </Link>

          <Link
            className={cx("sidenav__responsiveItem")}
            to={config.routes.hotel}
          >
            Hotel & Resort
          </Link>

          <Link
            className={cx("sidenav__responsiveItem")}
            to={config.routes.duThuyen}
          >
            Du thuyền
          </Link>

          <Link
            className={cx("sidenav__responsiveItem")}
            to={config.routes.lienHe}
          >
            Liên hệ
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
