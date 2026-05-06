import React from "react";
import "../App.css";

function ArticleCard({image, author, title, excerpt}) {
  return (
    <div className="bg-white rounded-sm overflow-hidden">
        <img src={image}></img>
        <div className="px-5 pt-5 pb-8">
            <p className="paragraph-color text-sm">By {author}</p>
            <h3 className="heading-color py-8">{title}</h3>
            <p className="paragraph-color">{excerpt}</p>
        </div> 
    </div>
  );
}

export default ArticleCard;