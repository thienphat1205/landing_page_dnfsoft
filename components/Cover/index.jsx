import React from "react";
import styles from "./index.module.less";
import { Carousel, Button } from "antd";
import MouseIcon from "../IconMouse";

const dummyList = [
  {
    title: "Banking solutions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis a.",
  },
  {
    title: "Finance solutions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis a.",
  },
  {
    title: "Account solutions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum id venenatis a.",
  },
];

export const Cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.contentCover}>
        <Carousel autoplay>
          {dummyList.map((item, idx) => {
            const { title, desc } = item;
            return (
              <div className={styles.itemCarousel} key={idx}>
                <div style={{ maxWidth: "1140px" }}>
                  <h2 className={styles.textTitle}>{title}</h2>
                  <p className={styles.textDesc}>{desc}</p>
                  <div className={styles.viewButton}>
                    <Button className={styles.viewButton__touch} type="primary">
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className={styles.viewMouse}>
          <MouseIcon />
        </div>
      </div>
    </div>
  );
};

export default Cover;
