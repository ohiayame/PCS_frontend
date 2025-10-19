import AdminPage from "@/page/AdminPage";
import CarInfo from "@/page/CarInfoPage";

export const RouterData = [
  {
    title: "Admin",
    element: <AdminPage />,
    link: "/",
  },
  {
    title: "CarInfo",
    element: <CarInfo />,
    link: "/carInfo/:carId",
  },
];
