import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/muka-logo-teal.svg" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};
