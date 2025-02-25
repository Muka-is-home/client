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
    title: "REALTORS",
    path: "/agents",
    type: "link"
  },
  {
    title: "EXPERTS",
    path: "/vendors",
    type: "link",
  },
  {
    title: "RESOURCES",
    type: "link",
    path: "/resources"
  }
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
