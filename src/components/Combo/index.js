import React from "react";
import classNames from "classnames/bind";

import styles from "./Combo.module.scss";

const cx = classNames.bind(styles);
function Combo({ title, number }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("combo__title")}>{title}</div>
      <div className={cx("combo__number")}>{number}</div>
    </div>
  );
}

export default Combo;
