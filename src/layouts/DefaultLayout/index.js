import classNames from "classnames/bind";

import styles from "./DefaultLayout.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const handleClickBtnGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
      <div
        className={cx("GoTop")}
        onClick={handleClickBtnGoTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FontAwesomeIcon className={cx("btnGoTop")} icon={faChevronUp} />
      </div>
    </div>
  );
}

export default DefaultLayout;
