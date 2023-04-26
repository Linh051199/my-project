import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Tour.module.scss";
import { faCalendar, faClock, faEye } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Tour({ data, width, height }) {
  return (
    <div className={cx("wrapper")}>
      <div>
        <img
          className={cx("tour__image")}
          src={data.src}
          alt="img"
          width={width}
          height={height}
        />
      </div>
      <div className={cx("tour__info")}>
        <div className={cx("tour__info__name")}>
          <strong>{data.name}</strong>
        </div>
        <div className={cx("tour__info__view")}>
          <span className={cx("tour__info__icon")}>
            <FontAwesomeIcon icon={faEye} />
          </span>
          {data.view} View
        </div>

        <div className={cx("tour__info__time")}>
          <span className={cx("tour__info__icon")}>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <strong>Thời gian: </strong>
          {data.tour}
        </div>
        <div className={cx("tour__info__day")}>
          <span className={cx("tour__info__icon")}>
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <strong>Ngày khởi hành: </strong>
          Thứ 7 hàng tuần
        </div>
        <div className={cx("tour__info__contact")}>
          <div className={cx("tour__info__price")}>
            <strong>Giá: </strong>
            {data.price} đ
          </div>
          <div>
            <button className={cx("tour__infoBtn")}>Liên hệ ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
