import React from "react";
import { Row, Col } from "antd";
import s from "./index.module.less";
import Section from "../Section";
import HeadingText from "../HeadingText";
import Image from "next/image";
import person1 from "../../assets/images/person1.jpeg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpeg";

const memberList = [
  {
    name: "Kaiara Spencer",
    title: "Software Engineer",
    avt: person1,
  },
  {
    name: "Dave Simpson",
    title: "Software Engineer",
    avt: person2,
  },
  {
    name: "Ben Thompson",
    title: "Software Engineer",
    avt: person3,
  },
];

function TeamMember() {
  return (
    <Section
      styles={{ backgroundColor: "#fff", padding: "5rem 15px" }}
      id="team"
    >
      <div className={s.teamMember}>
        <div className={s.viewTop}>
          <HeadingText
            title="Meet Team"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima neque tempora reiciendis."
          />
        </div>
        <div data-aos="fade-up">
          <Row gutter={[20, 20]}>
            {memberList.map((item, idx) => {
              return (
                <Col key={idx} md={8} sm={12} xs={24}>
                  <div className={s.member}>
                    <div className={s.viewAvt}>
                      <Image
                        src={item.avt}
                        layout="fill"
                        objectFit="cover"
                        alt="member-dnfsoft"
                      />
                    </div>
                    <div style={{ padding: "0.5rem" }}>
                      <p className={s.member__name}>{item.name}</p>
                      <p className={s.member__title}>{item.title}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </Section>
  );
}

export default TeamMember;
