import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";

function About() {
  return (
    <Section id="about">
      <div className={s.about}>
        <div className={s.viewTop}>
          <HeadingText
            title="About Us"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima neque tempora reiciendis."
          />
        </div>
        <Row gutter={[50, 20]}>
          <Col md={12} xs={24}>
            <div className={s.viewImage}></div>
            <div className={s.viewCircle}></div>
          </Col>
          <Col md={12} xs={24}>
            <div data-aos="fade-right">
              <p className={s.textTitleSmall}>FROM ZERO TO HERO</p>
              <p className={s.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                cumque autem officiis distinctio, voluptate qui minima. Magnam
                tenetur suscipit eius beatae dolore nihil repudiandae atque
                vero, rem, labore ullam ipsa incidunt enim id necessitatibus at
                dolor! Incidunt sequi nihil amet.
              </p>
              <p className={s.paragraph} style={{ marginTop: "1.5rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                cumque autem officiis distinctio, voluptate qui minima. Magnam
                tenetur suscipit eius beatae dolore nihil repudiandae atque
                vero, rem, labore ullam ipsa incidunt enim id necessitatibus at
                dolor! Incidunt sequi nihil amet.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

export default About;
