import "../App.css";
import content from "../content.json";
import FeatureCard from "./FeatureCard";
import Section from "./Section";


function Feature() {
  const { features } = content;
  return (

    <div className="bg-Gray-100 py-20">
        <Section>
        <h2 className="mb-8">{features.heading}</h2>
        <p className="paragraph-color">{features.intro}</p>
        <div className="grid grid-cols-4 gap-8 mt-20">
            {features.items?.map((item, index) => {
                
                return(
                    <FeatureCard 
                    url={item.icon}
                    title={item.title}
                    description={item.description}></FeatureCard>
                )
            })}
            
        </div>
        
        </Section>
    </div>
    
  );
}

export default Feature;