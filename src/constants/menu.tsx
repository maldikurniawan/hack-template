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
  sub?: [];
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
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/avatar",
        name: "avatar",
        title: "Avatar",
        element: <AvatarPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/badge",
        name: "badge",
        title: "Badge",
        element: <BadgePage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/button",
        name: "button",
        title: "Button",
        element: <ButtonPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/chip",
        name: "chip",
        title: "Chip",
        element: <ChipPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/collapsible",
        name: "collapsible",
        title: "Collapsible",
        element: <CollapsiblePage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/drawer",
        name: "drawer",
        title: "Drawer",
        element: <DrawerPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/list",
        name: "list",
        title: "List",
        element: <ListPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/modal",
        name: "modal",
        title: "Modal",
        element: <ModalPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/pagination",
        name: "pagination",
        title: "Pagination",
        element: <PaginationPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/popover",
        name: "popover",
        title: "Popover",
        element: <PopoverPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/tabs",
        name: "tabs",
        title: "Tabs",
        element: <TabsPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/tooltip",
        name: "tooltip",
        title: "Tooltip",
        element: <TooltipPage />,
        sub: [],
      },
      {
        icon: null,
        path: "/ui-elements/components/timeline",
        name: "timeline",
        title: "Timeline",
        element: <TimelinePage />,
        sub: [],
      },
    ],
  },
];
