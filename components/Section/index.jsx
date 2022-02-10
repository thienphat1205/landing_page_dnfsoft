import React from "react";
import s from "./index.module.less";

function Section({ styles, children, id }) {
  return (
    <section className={s.viewSection} style={{ ...styles }} id={id}>
      <div className={s.container}>{children}</div>
    </section>
  );
}

export default Section;
