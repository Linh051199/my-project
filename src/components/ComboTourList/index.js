import React from "react";
import classNames from "classnames/bind";

import styles from "./ComboTourList.module.scss";
import Combo from "~/components/Combo";

const cx = classNames.bind(styles);

function ComboTourList({ data, title, src, width, height }) {
  return (
    <div className={cx("combo__list")}>
      <div className={cx("combo__location")}>
        <img className={cx("combo__image")} src={src} alt="img" />
        <div className={cx("combo__title")}>{title}</div>
      </div>
      <div className={cx("combo__items")}>
        {data.map((item) => (
          <Combo
            key={item.id}
            title={item.title}
            number={item.number}
            src={item.src}
            width={width}
            height={height}
          />
        ))}
      </div>
    </div>
  );
}

export default ComboTourList;
