/**
 * It renders a navbar with a list of menu items
 * @returns A navbar with a dropdown menu and a mega menu.
 */
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { MainNavMenuItems } from "../../../data/navMenu";
import DropdownMenus from "./mainNavComponents/DropdownMenus";
import MegaMenu from "./mainNavComponents/MegaMenu";

const MainNav = ({ center, icon, home }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const [isOpenChild, setIsOpenChild] = useState();
  const [isOpenNestedChild, setIsOpenNestedChild] = useState();

  return (
    <nav>
      <div className="main-navbar">
        <div id="mainnav">
          {/* open navbar button in mobile size */}
          <div className="toggle-nav">
            <i className="fa fa-bars sidebar-bar text-dark" onClick={() => setOpenNavbar(true)}></i>
          </div>
          <ul className={`nav-menu ${openNavbar ? "open" : ""}`}>
            {/* close navbar button in mobile size */}
            <li className="back-btn">
              <div className="mobile-back text-end">
                <span onClick={() => setOpenNavbar(false)}>Back</span>
                <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
              </div>
            </li>
            {MainNavMenuItems.map((navTitle, index) => (
              <Fragment key={index}>
                {navTitle.type === "sub" ? (
                  <DropdownMenus
                    home={home}
                    navTitle={navTitle}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isOpenChild={isOpenChild}
                    setIsOpenChild={setIsOpenChild}
                    isOpenNestedChild={isOpenNestedChild}
                    setIsOpenNestedChild={setIsOpenNestedChild}
                    icon={icon}
                  />
                ) : (
                  <MegaMenu 
                    home={home}
                    navTitle={navTitle}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isOpenNestedChild={isOpenNestedChild}
                    setIsOpenNestedChild={setIsOpenNestedChild} />
                )}
              </Fragment>
            ))}
          <li className="mega-menu">
            <Link href="https://web.mukaishome.com/muka/signup" className="nav-link menu-title false text-dark">Signup</Link>
          </li>
          <li className="mega-menu">
            <Link href="https://web.mukaishome.com/muka/login" className="nav-link menu-title false text-dark">Login</Link>
          </li>
          </ul>
          {center && (
            <div className="brand-logo">
              <Link href="/">
                <img src="/assets/images/logo/4.png" alt="" className="img-fluid for-light" />
                <img src="/assets/images/logo/9.png" alt="" className="img-fluid for-dark" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
