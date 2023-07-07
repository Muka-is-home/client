import { Clipboard, Home, Layers, Link, MapPin, User, Zap } from "react-feather";

export const MainNavMenuItems = [
  {
    title: "HOME",
    icon: <Home />,
    type: "link",
    path: "/"
  },
  {
    title: "ABOUT",
    icon: <Home />,
    type: "link",
    path: "/COMPLETED/about"
  },
  {
    title: "AGENTS",
    icon: <Home />,
    path: "/COMPLETED/agents",
    type: "link"
  },
  {
    title: "Vendors",
    icon: <Home />,
    path: "/COMPLETED/vendors",
    type: "link",
  },
  {
    title: "AGENT/VENDOR Details",
    icon: <Home />,
    path: "/COMPLETED/pro/id",
    type: "link",
  },
  {
    title: "RESOURCES",
    icon: <Home />,
    type: "link",
    path: "/COMPLETED/resources"
  },
  {
    title: "CONTACT",
    icon: <Home />,
    type: "link",
    path: "/COMPLETED/contact"
  }
];
