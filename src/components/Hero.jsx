import "../App.css";
import content from "../content.json";
import Button from "./Button";
import Section from "./Section";


function Hero() {
  const { hero } = content;
  return (

    <div className="bg-Gray-50 relative bg-[url(/images/bg-intro-desktop.svg)] bg-position-[center_right_1rem] bg-contain bg-no-repeat">
        <Section>
            <div className="w-md py-40">
                <h1 className="text-6xl heading-color">{hero.title}</h1>
                <p className="paragraph-color py-5">{hero.subtitle}</p>
                <Button></Button>
            </div>  
        </Section>
        {/* <img src="/images/image-mockups.png" className="absolute top-0 right-0"></img> */}
    </div>
    
  );
}

export default Hero;