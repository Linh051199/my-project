import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.scss";
import {
  faFacebook,
  faSnapchat,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer")}>
        <div className={cx("footer__left")}>
          <div className={cx("footer__companyName")}>
            <strong>CÔNG TY TNHH THƯƠNG MẠI DU LỊCH VÀ DỊCH VỤ VIETSTAR</strong>
          </div>
          <div className={cx("footer__companyLocation")}>
            Đ/c: Số 27, phố 12, Thành phố Thái Bình, Tỉnh Thái Bình
          </div>
          <div className={cx("footer__companyPhone")}>
            Hotline: 0898 661 xxx
          </div>
          <div className={cx("footer__companyEmail")}>Email: info@gmail.vn</div>
          <div className={cx("footer__companyWebsite")}>
            Website: www.website.com.vn
          </div>
          <div className={cx("footer__companyConnect")}>
            KẾT NỐI VỚI CHÚNG TÔI
          </div>
          <div className={cx("footer__companyConnectButtons")}>
            <div className={cx("footer__companyConnectButton")}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className={cx("footer__companyConnectButton")}>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </div>
            <div className={cx("footer__companyConnectButton")}>
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className={cx("footer__companyConnectButton")}>
              <FontAwesomeIcon icon={faSnapchat} />
            </div>
          </div>
          <div className={cx("footer__companyCheckedImg")}></div>
        </div>

        <div className={cx("footer__right")}>
          <div className={cx("footer__help")}>HỖ TRỢ KHÁCH HÀNG</div>
          <div className={cx("footer__hotLine")}>Đường dây nóng:</div>
          <div className={cx("footer__number")}>0898 661 xxx</div>
          <div className={cx("footer__email")}>Email: info@gmail.vn</div>
          <div className={cx("footer__work")}>GIỜ LÀM VIỆC</div>
          <div className={cx("footer__workTime")}>
            8h đến 22h (T2 - T7) 8h đến 17h30h (CN)
          </div>
          <div className={cx("footer__login")}>
            ĐĂNG KÝ EMAIL ĐỂ NHẬN THÔNG TIN
          </div>

          <div>
            <input
              className={cx("footer__input")}
              type="text"
              placeholder=" Email của bạn"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
