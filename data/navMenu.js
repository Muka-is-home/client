export const MainNavMenuItems = [
  {
    title: "HOME",
    type: "link", // is there is no sub navigation options (link, sub)
    path: "/"
  },
  {
    title: "ABOUT",
    type: "link",
    path: "/about"
  },
  {
    title: "AGENTS",
    path: "/WIP/agents",
    type: "link"
  },
  {
    title: "Vendors",
    path: "/WIP/vendors",
    type: "link",
  },
  {
    title: "AGENT/VENDOR Details",
    path: "/WIP/pro/id",
    type: "link",
  },
  {
    title: "RESOURCES",
    type: "link",
    path: "/WIP/resources"
  },
  {
    title: "CONTACT",
    type: "link",
    path: "/contact"
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
  //       path: "/WIP/contact"
  //     },
  //   ]
  // }
];
