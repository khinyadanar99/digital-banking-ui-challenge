import React from "react";

function Section({ children, customClass, customPadding }) {
  const isCustomClass = customClass || "";
  const isPadding = customPadding ? customPadding : "px-4";

  return (
    <section className={`max-w-6xl mx-auto ${isCustomClass} ${isPadding}`}>
      {children}
    </section>
  );
}

export default Section;
