import React from "react";
import s from "./index.module.less";

function Section({ children }) {
  return (
    <div className={s.viewSection}>
      <div className={s.container}>{children}</div>
    </div>
  );
}

export default Section;
