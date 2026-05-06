import React from "react";
import "../App.css";

function FeatureCard({url, title, description}) {
  return (
    <div className="text-center md:text-left">
        <img src={url} className="mx-auto md:mx-0" alt="img"></img>
        <h3 className="heading-color py-8">{title}</h3>
        <p className="paragraph-color">{description}</p>
    
    </div>
  );
}

export default FeatureCard;