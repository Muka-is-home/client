export const MainNavMenuItems = [
  {
    title: "HOME",
    type: "link", // is there is no sub navigation options (link, sub)
    path: "/"
  },
  {
    title: "ABOUT",
    type: "link",
    path: "/COMPLETED/about"
  },
  {
    title: "AGENTS",
    path: "/COMPLETED/agents",
    type: "link"
  },
  {
    title: "Vendors",
    path: "/COMPLETED/vendors",
    type: "link",
  },
  {
    title: "AGENT/VENDOR Details",
    path: "/COMPLETED/pro/id",
    type: "link",
  },
  {
    title: "RESOURCES",
    type: "link",
    path: "/COMPLETED/resources"
  },
  {
    title: "CONTACT",
    type: "link",
    path: "/COMPLETED/contact"
  },
  // BELOW IS AN EXAMPLE OF A SUB MENU
  // {
  //   title: "CONTACT",
  //   icon: <Home />,
  //   type: "sub",
  //   children : [
  //     {
  //       title: "CONTACT",
  //       type: "link",
  //       path: "/COMPLETED/contact"
  //     },
  //   ]
  // }
];
