import React from "react";
import Logo from "./Logo";
import content from "../content.json";
import Button from "./Button";

function Header() {
  const { navLinks } = content;
  console.log(navLinks)
  return (
    <div>
      <Logo url="/images/logo-dark.svg"></Logo>
      {navLinks?.map((navLink, index) => {
        return(
          <a href="#">{navLink}</a>
        )
      })}
      <Button></Button>
    </div>
  );
}

export default Header;
