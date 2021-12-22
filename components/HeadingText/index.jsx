import React from "react";
import Aos from "aos";
import s from "./index.module.less";

function HeadingText({ title = "", desc = "" }) {
  React.useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className={s.root}>
      <p className={s.textTitle} data-aos="fade-up">
        {title}
      </p>
      {desc && (
        <p className={s.textDesc} data-aos="fade-up">
          {desc}
        </p>
      )}
    </div>
  );
}

export default HeadingText;
