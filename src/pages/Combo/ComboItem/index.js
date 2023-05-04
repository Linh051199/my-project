import React from "react";
import classNames from "classnames/bind";
import styles from "./ComboItem.module.scss";
import { useLocation } from "react-router-dom";

import Banner from "~/components/Banner";

const cx = classNames.bind(styles);
function ComboItem() {
  console.log({ location });
  const { location } = useLocation();
  const { id, name } = location;
  return (
    <div>
      <Banner className={cx("banner")} title="Combo" />
      <div>{id}</div>
    </div>
  );
}

export default ComboItem;
