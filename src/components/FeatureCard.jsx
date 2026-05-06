import React from "react";
import "../App.css";

function FeatureCard({url, title, description}) {
  return (
    <div>
        <img src={url}></img>
        <h3 className="heading-color py-8">{title}</h3>
        <p className="paragraph-color">{description}</p>
    
    </div>
  );
}

export default FeatureCard;