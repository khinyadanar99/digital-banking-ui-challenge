import React from "react";
import Section from "./Section";
import Button from "./Button";
import content from "../content.json";

function HeroSection() {
  const { hero } = content;

  return (
    <div className=" min-h-[80vh]">
      <Section customClass={"px-0"}>
        <div className="flex flex-col-reverse">
          <div className="">
            <div className="md:w-md py-40">
              <h1 className="text-6xl heading-color">{hero.title}</h1>
              <p className="paragraph-color py-5">{hero.subtitle}</p>
              <Button></Button>
            </div>
          </div>
          <div className="w-screen h-[50vh] bg-amber-200">
            <div className="absolute md:-top-45 md:-right-110">
              <img src="/images/bg-intro-desktop.svg" className="hidden md:block" alt="img" />
                <img src="/images/bg-intro-mobile.svg" alt="img" className="md:hidden" />
            </div>
            {/* <img
              className="absolute z-40 -top-20 -right-30"
              src="/images/image-mockups.png"
              alt="img"
            /> */}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default HeroSection;
