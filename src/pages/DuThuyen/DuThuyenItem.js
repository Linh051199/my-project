import React from "react";
import classNames from "classnames/bind";

import styles from "./DuThuyen.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function DuThuyenItem({ data }) {
  console.log(data);
  return (
    <div className={cx("duThuyen__item")}>
      <div>
        <img className={cx("duThuyen__img")} src={data.src} alt="img" />
      </div>
      <div className={cx("duThuyen__content")}>
        <div className={cx("duThuyen__name")}>
          <strong>{data.name}</strong>
        </div>
        <div className={cx("duThuyen__star")}>
          <FontAwesomeIcon className={cx("starIcon")} icon={faStar} />
          5.0 Good{" "}
        </div>
        <div className={cx("duThuyen__number")}>
          <strong>Trọng tải: </strong> {data.number} người
        </div>
        <div>
          <button className={cx("duThuyen__contactBtn")}>Liên hệ ngay</button>
        </div>
      </div>
    </div>
  );
}

export default DuThuyenItem;
