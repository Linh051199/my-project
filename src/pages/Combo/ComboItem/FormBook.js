import React, { forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./ComboItem.module.scss";

const cx = classNames.bind(styles);

function FormBook({ text }, ref) {
  return (
    <div ref={ref} className={cx("wrapper")}>
      <div id="note" className={cx("comboItem__desc__book")}>
        <div className={cx("comboItem__desc__bookTitle")}>ĐẶT TOUR</div>
        <div className={cx("comboItem__desc__bookTitleDesc")}>
          Bạn vui lòng điền vào form dưới đây để đặt tour.
        </div>
      </div>
      <div className={cx("formBook1")}>
        <div className={cx("formBook1__info")}>
          <span className={cx("formBook1__number")}>01</span>
          <span className={cx("formBook1__title")}>THÔNG TIN CÁ NHÂN</span>
        </div>
        <div className={cx("formBook1__form")}>
          <input
            className={cx("formBook1__formItem")}
            placeholder="Họ và tên"
          />
          <input className={cx("formBook1__formItem")} placeholder="Địa chỉ" />
          <input
            className={cx("formBook1__formItem")}
            placeholder="Điện thoại"
          />
          <input
            type="email"
            className={cx("formBook1__formItem")}
            placeholder="Email"
          />
        </div>
      </div>
      <div className={cx("formBook2")}>
        <div className={cx("formBook2__info")}>
          <span className={cx("formBook2__number")}>02</span>
          <span className={cx("formBook2__title")}>CHI TIẾT ĐẶT</span>
        </div>
        <div className={cx("formBook2__form")}>
          <div className={cx("formBook2__infoUser")}>
            <span className={cx("formBook2__infoUserTitle")}>
              Thông tin đoàn:
            </span>
            <select className={cx("formBook2__infoUserInput")}>
              <option>Người lớn</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
            <select className={cx("formBook2__infoUserInput")}>
              <option>Trẻ em</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
            <select className={cx("formBook2__infoUserInput")}>
              <option>Em bé</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div>
          <div className={cx("formBook2__dayStart")}>
            <span className={cx("formBook2__dayStartTitle")}>
              Ngày khởi hành:
            </span>
            <input className={cx("formBook2__dayStartInput")} />
          </div>
          <div className={cx("formBook2__pay")}>
            <span className={cx("formBook2__payTitle")}>
              Hình thức thoanh toán:
            </span>
            <select className={cx("formBook2__payTitleSelect")}>
              <option>Thanh toán tại văn phòng</option>
              <option>Thanh toán chuyển khoản</option>
            </select>
          </div>
          <div className={cx("formBook2__moreInfo")}>
            <span className={cx("formBook2__moreInfoTitle")}>
              Yêu cầu khác:
            </span>
            <textarea className={cx("formBook2__moreInfoInput")} type="text" />
          </div>
        </div>
      </div>
      <button className={cx("formSubmit")}>Xác nhận đặt tour</button>
    </div>
  );
}

export default forwardRef(FormBook);
