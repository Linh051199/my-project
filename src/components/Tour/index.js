import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Tour.module.scss";
import {
  faCalendar,
  faClock,
  faEye,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Tour() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <img
          className={cx("tour__image")}
          src="http://dulich14.maugiaodien.com/wp-content/uploads/2021/05/h1.png"
          alt="img"
        />
      </div>
      <div className={cx("tour__info")}>
        <div className={cx("tour__info__name")}>
          <strong>Mộc Châu 2 ngày 1 đêm</strong>
        </div>
        <div className={cx("tour__info__view")}>
          <span className={cx("tour__info__icon")}>
            <FontAwesomeIcon icon={faEye} />
          </span>
          277 View
        </div>
        <div className={cx("tour__info__location")}>
          <span className={cx("tour__info__icon")}>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <strong>Hành trình:</strong>
          Cao Nguyên Mộc Châu
        </div>
        <div className={cx("tour__info__time")}>
          <span className={cx("tour__info__icon")}>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <strong>Thời gian:</strong>2 NGÀY 1 ĐÊM
        </div>
        <div className={cx("tour__info__day")}>
          <span className={cx("tour__info__icon")}>
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <strong>Ngày khởi hành:</strong>
          Thứ 7 hàng tuần
        </div>
        <div className={cx("tour__info__price")}>950.000đ</div>
      </div>
    </div>
  );
}

export default Tour;
