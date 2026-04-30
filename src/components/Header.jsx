import React from "react";
import Logo from "./Logo";
import content from "../content.json";
import Button from "./Button";
import Section from "./Section";

function Header() {
  const { navLinks } = content;
  console.log(navLinks)
  return (
    
    <Section>
      <div className="flex justify-between items-center py-5">
        <Logo url="/images/logo-dark.svg"></Logo>
        <div className="flex gap-10">
          {navLinks?.map((navLink, index) => {
            return(
              <a href="#">{navLink}</a>
            )
          })}
        </div>
        
        <Button></Button>
      </div>
    </Section>
    
  );
}

export default Header;
