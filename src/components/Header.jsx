import React from "react";
import content from "../content.json";
import Button from "./Button";
import Section from "./Section";

function Header() {
  const { navLinks } = content;
  console.log(navLinks)
  return (

    <Section>
      <div className="flex justify-between items-center py-5">
        <img src="/images/logo-dark.svg" alt="logo"></img>
        <div className="flex gap-10">
          {navLinks?.map((navLink, index) => {
            return(
              <a href="#" className="text-Gray-600">{navLink}</a>
            )
          })}
        </div>
        
        <Button></Button>
      </div>
    </Section>
    
  );
}

export default Header;
