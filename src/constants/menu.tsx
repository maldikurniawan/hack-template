import {
  AlertPage,
  AvatarPage,
  BadgePage,
  ButtonPage,
  ChipPage,
  CollapsiblePage,
  Dashboard,
  DrawerPage,
  ListPage,
  ModalPage,
  PaginationPage,
  PopoverPage,
  TabsPage,
  TimelinePage,
  TooltipPage,
} from "@/template";
import { TbCards, TbSmartHome } from "react-icons/tb";

// Adjust the SubMenu interface to not have a nested sub property
interface SubMenu {
  path: string;
  element: JSX.Element;
  icon?: JSX.Element | null;
  name?: string | JSX.Element | null;
  title?: string;
}

// MenuItem interface with sub as an array of SubMenu
interface MenuItem {
  path: string;
  element: JSX.Element | null;
  icon?: JSX.Element;
  name?: string | JSX.Element;
  title?: string;
  sub?: SubMenu[];
  label?: string;
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
  {
    icon: <TbCards />,
    path: "components",
    name: "components",
    title: "Components",
    element: null,
    sub: [
      {
        icon: null,
        path: "/ui-elements/components/alert",
        name: "alert",
        title: "Alert",
        element: <AlertPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/avatar",
        name: "avatar",
        title: "Avatar",
        element: <AvatarPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/badge",
        name: "badge",
        title: "Badge",
        element: <BadgePage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/button",
        name: "button",
        title: "Button",
        element: <ButtonPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/chip",
        name: "chip",
        title: "Chip",
        element: <ChipPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/collapsible",
        name: "collapsible",
        title: "Collapsible",
        element: <CollapsiblePage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/drawer",
        name: "drawer",
        title: "Drawer",
        element: <DrawerPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/list",
        name: "list",
        title: "List",
        element: <ListPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/modal",
        name: "modal",
        title: "Modal",
        element: <ModalPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/pagination",
        name: "pagination",
        title: "Pagination",
        element: <PaginationPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/popover",
        name: "popover",
        title: "Popover",
        element: <PopoverPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/tabs",
        name: "tabs",
        title: "Tabs",
        element: <TabsPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/tooltip",
        name: "tooltip",
        title: "Tooltip",
        element: <TooltipPage />,
      },
      {
        icon: null,
        path: "/ui-elements/components/timeline",
        name: "timeline",
        title: "Timeline",
        element: <TimelinePage />,
      },
    ],
  },
];
