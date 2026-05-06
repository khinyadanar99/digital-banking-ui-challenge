import React from "react";
import content from "../content.json";
import Section from "./Section";
import Button from "./Button";

function Footer({ url }) {
  const {footer} = content;
  return (
    <div className="bg-Blue-950 py-12">
      <Section >
        <div className="flex justify-between">
          <div className="w-[50%] flex justify-between">
            <div>
              <img src="/images/logo-light.svg" alt="logo"></img>
              <div className="flex gap-2">
                {footer.socialLinks?.map((socialLink, index) => {
                  return(
                    <a href="#" className="text-Gray-600">
                      <img src={socialLink.icon} alt={socialLink.label}></img>
                    </a>
                  )
                })}
              </div>
              
            </div>
            <div>
                {footer.links?.map((link, index) => {
                return(
                  <a href="#" className="text-Gray-600">{link}</a>
                )
              })}
            </div>
          </div>
          
          <div>
            <Button></Button>
          </div>
        </div>
        
        
      </Section>
    </div>
  )
}

export default Footer;