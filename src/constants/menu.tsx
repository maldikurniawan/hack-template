import Dashboard from "@/template/dashboard/Dashboard";
import {
  TbSmartHome,
} from "react-icons/tb";

export const menu = [
  {
    icon: <TbSmartHome />,
    path: "/",
    name: "dashboard",
    title: "Dashboard",
    element: <Dashboard />,
    sub: [],
  },
];
