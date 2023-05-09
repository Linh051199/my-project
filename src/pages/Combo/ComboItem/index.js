import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./ComboItem.module.scss";
import { useLocation } from "react-router-dom";

import Banner from "~/components/Banner";
import FormBook from "./FormBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCar,
  faClock,
  faEye,
  faGlobe,
  faHotel,
  faLocationDot,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function ComboItem() {
  const location = useLocation();
  const data = location.state;

  const refNote = useRef(null);
  const refBook = useRef(null);

  const handleOnclickRefNote = () => {
    refNote.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnclickRefBook = () => {
    refBook.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={cx("wrapper")}>
      <Banner className={cx("banner")} title={data.title} />
      <div className={cx("comboItem__info")}>
        <div className={cx("comboItem__img")}>
          <img className={cx("comboItem__image")} src={data.src} alt="img" />
        </div>
        <div className={cx("comboItem__listInfo")}>
          <div className={cx("comboItem__listInfo__title")}>{data.title}</div>
          <div className={cx("comboItem__listInfo__view")}>
            <FontAwesomeIcon className={cx("icon")} icon={faEye} />
            288 View
          </div>
          <div className={cx("comboItem__listInfo__separate")}></div>
          <div className={cx("comboItem__listInfo__code")}>
            <FontAwesomeIcon className={cx("icon")} icon={faGlobe} />
            <strong>Mã: </strong>TĐ02
          </div>
          <div className={cx("comboItem__listInfo__time")}>
            <FontAwesomeIcon className={cx("icon")} icon={faClock} />
            <strong>Thời gian: </strong>2 NGÀY 1 ĐÊM
          </div>
          <div className={cx("comboItem__listInfo__dayStart")}>
            <FontAwesomeIcon className={cx("icon")} icon={faCalendar} />
            <strong>Ngày khởi hành: </strong>
            Thứ 7 hàng tuần
          </div>
          <div className={cx("comboItem__listInfo__separate")}></div>

          <div className={cx("comboItem__listInfo__whereStart")}>
            <FontAwesomeIcon className={cx("icon")} icon={faLocationDot} />
            <strong>Nơi khởi hành: </strong>
            {data.whereStart}
          </div>
          <div className={cx("comboItem__listInfo__trip")}>
            <FontAwesomeIcon className={cx("icon")} icon={faSuitcase} />
            <strong>Hành trình: </strong>
            Cao Nguyên Mộc Châu
          </div>
          <div className={cx("comboItem__listInfo__separate")}></div>

          <div className={cx("comboItem__listInfo__hotel")}>
            <FontAwesomeIcon className={cx("icon")} icon={faHotel} />
            <strong>Khách sạn: </strong>4 sao
          </div>
          <div className={cx("comboItem__listInfo__vehicle")}>
            <FontAwesomeIcon className={cx("icon")} icon={faCar} />
            <strong>Phương tiện di chuyển: </strong>Ô tô
          </div>
          <div className={cx("comboItem__listInfo__separate")}></div>

          <div className={cx("comboItem__listInfo__contact")}>
            <div className={cx("comboItem__listInfo__price")}>
              Giá:{" "}
              <span className={cx("comboItem__listInfo__priceStrong")}>
                950.000đ
              </span>
            </div>
            <div className={cx("comboItem__listInfo__btnBook")}>
              <button
                className={cx("comboItem__listInfo__btn")}
                onClick={handleOnclickRefBook}
              >
                ĐẶT TOUR NGAY
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("comboItem__desc")}>
        <div className={cx("comboItem__desc__nav")}>
          <div className={cx("comboItem__desc__navItem")}>Tổng quan</div>
          <div className={cx("comboItem__desc__navItem")}>Bảng giá</div>
          <div
            ref={refNote}
            className={cx("comboItem__desc__navItem")}
            onClick={handleOnclickRefNote}
          >
            lưu ý
          </div>
        </div>
        <div className={cx("comboItem__desc__info")}>
          <div id="overview" className={cx("comboItem__desc__overview")}>
            <div className={cx("comboItem__desc__overviewTitle")}>
              TỔNG QUAN
            </div>
            <div className={cx("comboItem__desc__overviewdesc")}>
              {data.description}
            </div>
            <div className={cx("comboItem__imgMore")}>
              <img
                className={cx("comboItem__imageMore")}
                src={data.src}
                alt="img"
              />
            </div>
          </div>
          <div id="priceList" className={cx("comboItem__desc__priceList")}>
            <div className={cx("comboItem__desc__priceListTitle")}>
              BẢNG GIÁ
            </div>
            <div className={cx("comboItem__desc__priceListDesc")}>
              <span className={cx("comboItem__priceListItem")}>
                GIÁ TOUR DU LỊCH {data.title} DÀNH CHO 01 KHÁCH THỨ 7 HÀNG TUẦN
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                Khách sạn 3 sao: 1.220.000
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                Khách sạn Vin: 1.660.000
              </span>
              <span className={cx("comboItem__priceListItem")}>
                GIÁ TOUR {data.title} DÀNH CHO 01 KHÁCH TỪ CHỦ NHẬT - THỨ 6 HÀNG
                TUẦN
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                Khách sạn 3 sao: 1.990.000
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                Khách sạn Vin: 2.660.000
              </span>
              <span className={cx("comboItem__priceListItem")}>
                Giá tour du lịch {data.title} bao gồm:
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                Xe ô tô 7 đến 45 chỗ đời mới đưa đón theo chương trình
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                01 đêm nghỉ theo tiêu chuẩn đăng ký
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                Nhà sàn tập thể (chăn đệm sạch sẽ, vệ sinh chung bên ngoài)
              </span>
              <span className={cx("comboItem__priceListDesc")}>
                Ngủ khách sạn, tiêu chuẩn 02 người/phòng (lẻ ghép ngủ 3)
              </span>
            </div>
          </div>
          <div id="note" className={cx("comboItem__desc__note")}>
            <div ref={refNote} className={cx("comboItem__desc__noteTitle")}>
              LƯU Ý
            </div>
            <div className={cx("comboItem__desc__noteDesc")}>
              Trường hợp Quý khách đăng ký ngủ khách sạn Vin. Do đặc điểm khách
              sạn chỉ có loại phòng 01 giường lớn (Double) hoặc loại phòng có 02
              giường nhỏ (twin) và không có phòng tiêu chuẩn ngủ 3 như những
              khách sạn khác.Do đó, nếu trường hợp nếu Quý khách đăng ký theo
              nhóm 03 người thì sẽ ngủ ghép 3 trong phòng twin (2 giường đơn)
              hoặc có thể đóng thêm chi phí ngủ đơn để lấy thêm 01 phòng nữa để
              ngủ; Ngoài ra, số lượng phòng Twin thường chiếm số lượng nhiều hơn
              loại phòng Doube. Do tính chất khách ghép đoàn, chúng tôi không
              biết trước được mỗi nhóm khách cần loại phòng gì nên có thể không
              bố trí được đúng loại phòng (Double hay Twin) theo đúng yêu cầu
              của Quý khách. Mong Quý khách thông cảm!
            </div>
          </div>
          <FormBook ref={refBook} text="hello" />
        </div>
      </div>
    </div>
  );
}

export default ComboItem;
