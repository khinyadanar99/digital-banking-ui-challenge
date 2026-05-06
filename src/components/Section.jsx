import React from "react";

function Section({ children, customClass }) {
  return (
    <section className={`max-w-6xl mx-auto ${customClass}`}>
      {children}
    </section>
  );
}

export default Section;
