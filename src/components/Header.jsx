import React from "react";
import content from "../content.json";
import Button from "./Button";
import Section from "./Section";

function Header() {
  const { navLinks } = content;
  return (
    <div className="z-50 relative bg-Gray-50">
      <Section>
        <div className=" flex justify-between items-center py-5">
          <img src="/images/logo-dark.svg" alt="logo"></img>
          <div className="md:flex gap-10 hidden">
            {navLinks?.map((navLink, index) => {
              return (
                <a href="#" className="text-Gray-600">
                  {navLink}
                </a>
              );
            })}
          </div>
          <div className="md:flex hidden">
            <Button></Button>
          </div>
          <img
            src="/images/icon-hamburger.svg"
            alt="icon"
            className="md:hidden"
          />
        </div>
      </Section>
    </div>
  );
}

export default Header;
