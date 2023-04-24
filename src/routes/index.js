import config from "../config";
import HomePage from "~/pages/Home";
import ComboPage from "~/pages/Combo";
import TourPage from "../pages/Tour";
import HotelPage from "../pages/Hotel";
import DuThuyenPage from "../pages/DuThuyen";
import LienHePage from "../pages/LienHe";

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.combo, component: ComboPage },
  { path: config.routes.tour, component: TourPage },
  { path: config.routes.hotel, component: HotelPage },
  { path: config.routes.duThuyen, component: DuThuyenPage },
  { path: config.routes.lienHe, component: LienHePage },
];

export { publicRoutes };
