import React from "react";
import classNames from "classnames/bind";

import styles from "./Combo.module.scss";
import Banner from "~/components/Banner";

const cx = classNames.bind(styles);

function ComboPage() {
  return (
    <div className={cx("wrapper")}>
      <Banner />
      <div className={cx("content")}>ComboPage</div>
    </div>
  );
}

export default ComboPage;
