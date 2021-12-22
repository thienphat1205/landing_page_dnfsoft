import React from "react";
import s from "./index.module.less";
import Section from "../Section";

function About() {
  return (
    <Section>
      <div className={s.about}>
        <div className={s.viewTop}>
          <p className={s.textTitle}>About Us</p>
          <p className={s.textDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima neque tempora reiciendis.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default About;
