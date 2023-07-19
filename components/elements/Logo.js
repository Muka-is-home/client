import Link from "next/link";
import React from "react";

export const Logo = ({ url }) => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={url} alt="" className="img-fluid" />
      </Link>
    </div>
  );
};
