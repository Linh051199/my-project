import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Combo from "~/components/Combo";
import Tour from "~/components/Tour";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("home__bgImage")}></div>

      <div className={cx("home__combo__hashtag")}>• • • VIETSTARTOUR • • •</div>
      <div className={cx("home__combo__title")}>COMBO DU LỊCH</div>
      <div className={cx("home__combo")}>
        <div className={cx("home__combo__list")}>
          <Combo
            className={cx("home__combo__item")}
            title="phu quoc"
            number="12"
          />
          <Combo
            className={cx("home__combo__item")}
            title="phu quoc"
            number="12"
          />
          <Combo
            className={cx("home__combo__item")}
            title="phu quoc"
            number="12"
          />
          <Combo
            className={cx("home__combo__item")}
            title="phu quoc"
            number="12"
          />
          <Combo
            className={cx("home__combo__item")}
            title="phu quoc"
            number="12"
          />
          <Combo
            className={cx("home__combo__item")}
            title="phu quoc"
            number="12"
          />
        </div>
      </div>

      <div className={cx("home__tour")}>
        <div className={cx("home__tour__list")}>
          <Tour className={cx("home__tour__item")} />
          <Tour className={cx("home__tour__item")} />
          <Tour className={cx("home__tour__item")} />
          <Tour className={cx("home__tour__item")} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
