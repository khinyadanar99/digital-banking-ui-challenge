import React from "react";
import Section from "./Section";
import Button from "./Button";
import content from "../content.json";

function HeroSection() {
  const { hero } = content;

  return (
    <div className=" min-h-[80vh]">
      <Section>
        <div className="flex">
          <div className="">
            <div className="w-md py-40">
              <h1 className="text-6xl heading-color">{hero.title}</h1>
              <p className="paragraph-color py-5">{hero.subtitle}</p>
              <Button></Button>
            </div>
          </div>
          <div className="h-[50vh] bg-red-500 w-screen">sss</div>
          <div className="absolute -top-45 -right-110">
            <img src="/images/bg-intro-desktop.svg" alt="img" />
          </div>
          <img
            className="absolute z-40 -top-20 -right-30"
            src="/images/image-mockups.png"
            alt="img"
          />
        </div>
      </Section>
    </div>
  );
}

export default HeroSection;
