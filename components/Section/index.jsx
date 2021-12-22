import React from "react";
import s from "./index.module.less";

function Section({ styles, children }) {
  return (
    <div className={s.viewSection} style={{ ...styles }}>
      <div className={s.container}>{children}</div>
    </div>
  );
}

export default Section;
