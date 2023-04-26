import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./DuThuyen.module.scss";
import Banner from "~/components/Banner";
import DuThuyenItem from "./DuThuyenItem";

const cx = classNames.bind(styles);

function DuThuyenPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://instagram-data.onrender.com/duthuyen")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error when calling API dataUser", error));
  }, []);
  return (
    <div className={cx("wrapper")}>
      <Banner title="Du thuyền" />
      <div className={cx("content")}>
        {data.map((item) => (
          <DuThuyenItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default DuThuyenPage;
