import React from "react";
import Section from "./Section";
import Button from "./Button";
import content from "../content.json";

function HeroSection() {
  const { hero } = content;

  return (
    <div className=" min-h-[80vh]">
      <Section customPadding="px-0">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="">
            <div className="lg:w-md lg:py-40 py-20 text-center lg:text-left ">
              <h1 className="text-4xl lg:text-6xl heading-color ">{hero.title}</h1>
              <p className="paragraph-color py-5">{hero.subtitle}</p>
              <Button></Button>
            </div>
          </div>
          <div className="w-screen h-[50vh]">
            <div className="absolute lg:-top-45 lg:-right-110">
              <img src="/images/bg-intro-desktop.svg" className="hidden md:block" alt="img" />
                <img src="/images/bg-intro-mobile.svg" alt="img" className="md:hidden" />
            </div>
            <img
              className="absolute z-40 lg:-top-20 lg:-right-30 -top-8 mx-auto"
              src="/images/image-mockups.png"
              alt="img"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default HeroSection;
