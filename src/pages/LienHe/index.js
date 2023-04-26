import React from "react";
import classNames from "classnames/bind";

import styles from "./LienHe.module.scss";
import Banner from "~/components/Banner";

const cx = classNames.bind(styles);

function LienHePage() {
  return (
    <div className={cx("wrapper")}>
      <Banner title="Liên Hệ" />
      <div className={cx("content")}>
        <div className={cx("contact__infoLeft")}>
          <div className={cx("contact__companyName")}>
            <strong>CÔNG TY TNHH THƯƠNG MẠI DU LỊCH VÀ DỊCH VỤ VIETSTAR</strong>
          </div>
          <div className={cx("contact__companyLocation")}>
            Đ/c: Số 27, phố 12, Thành phố Thái Bình, Tỉnh Thái Bình
          </div>
          <div className={cx("contact__companyPhone")}>
            Hotline: 0898 661 xxx
          </div>
          <div className={cx("contact__companyEmail")}>
            Email: info@gmail.vn
          </div>
          <div className={cx("contact__companyWebsite")}>
            Website: www.website.com.vn
          </div>
        </div>

        <div className={cx("contact__infoRight")}>
          <div className={cx("contact__inputName")}>
            <div>Tên của bạn: </div>
            <input
              className={cx("inputInfo")}
              type="text"
              placeholder="Nhập tên của bạn"
            />
          </div>

          <div className={cx("contact__inputEmail")}>
            <div>Email của bạn: </div>
            <input
              className={cx("inputInfo")}
              type="email"
              placeholder="Nhập email của bạn"
            />
          </div>

          <div className={cx("contact__inputNumber")}>
            <div>Số điện thoại của bạn: </div>
            <input
              className={cx("inputInfo")}
              type="text"
              placeholder="Nhập số  điện thoại của bạn"
            />
          </div>

          <div className={cx("contact__inputMessage")}>
            <div>Thông điệp của bạn: </div>
            <textarea className={cx("inputMessage")} type="text" />
          </div>

          <button className={cx("contact__sendBtn")}>Gửi</button>
        </div>
      </div>
    </div>
  );
}

export default LienHePage;
