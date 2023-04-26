import React from "react";
import classNames from "classnames/bind";

import styles from "./Combo.module.scss";

const cx = classNames.bind(styles);
function Combo({ title, src, number, width, height }) {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("combo__image")}
        src={src}
        alt="Snow"
        width={width}
        height={height}
      />
      <div className={cx("combo__title")}>{title}</div>
      <div className={cx("combo__number")}>{number} Gói</div>
    </div>
  );
}

export default Combo;
