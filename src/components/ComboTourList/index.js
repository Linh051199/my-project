import React from "react";
import classNames from "classnames/bind";

import styles from "./ComboTourList.module.scss";
import Combo from "~/components/Combo";
import { Link, useNavigate } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function ComboTourList({ data, title, src, width, height }) {
  const navigate = useNavigate();
  const toComboItem = () => {
    navigate(config.routes.comboItem, { state: { id: 1, name: "sabaoon" } });
  };

  return (
    <div className={cx("combo__list")}>
      <div className={cx("combo__location")}>
        <img className={cx("combo__image")} src={src} alt="img" />
        <div className={cx("combo__title")}>{title}</div>
      </div>
      <div className={cx("combo__items")}>
        {data.map((item) => (
          <Link key={item.id} to={config.routes.comboItem} state={item}>
            <Combo
              key={item.id}
              title={item.title}
              number={item.number}
              src={item.src}
              width={width}
              height={height}
              onClick={() => {
                toComboItem();
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComboTourList;
