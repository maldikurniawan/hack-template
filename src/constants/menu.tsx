import Dashboard from "@/template/dashboard/Dashboard";
import { TbSmartHome } from "react-icons/tb";

// Add icon to the SubMenu interface
interface SubMenu {
  path: string;
  element: JSX.Element;
  icon?: JSX.Element;
  name?: JSX.Element;
}

interface MenuItem {
  path: string;
  element: JSX.Element;
  icon?: JSX.Element;
  name?: string;
  title?: string;
  sub?: SubMenu[];
}

export const menu: MenuItem[] = [
  {
    icon: <TbSmartHome />,
    path: "/",
    name: "dashboard",
    title: "Dashboard",
    element: <Dashboard />,
    sub: [],
  },
];
