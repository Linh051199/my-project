import React from "react";
import classNames from "classnames/bind";

import styles from "./Hotel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function HotelItem({ data }) {
  return (
    <div className={cx("hotel__item")}>
      <div>
        <img className={cx("hotel__img")} src={data.src} alt="img" />
      </div>
      <div className={cx("hotel__content")}>
        <div className={cx("hotel__name")}>
          <strong>{data.name}</strong>
        </div>
        <div className={cx("hotel__star")}>
          <FontAwesomeIcon className={cx("starIcon")} icon={faStar} />
          5.0 Good{" "}
        </div>
        <div className={cx("hotel__location")}>
          <strong>Địa chỉ: </strong>
          {data.location}
        </div>
        <div className={cx("hotel__contact")}>
          <button className={cx("hotel__contactBtn")}>Liên hệ ngay</button>
        </div>
      </div>
    </div>
  );
}

export default HotelItem;
