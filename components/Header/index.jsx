/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import styles from "./index.module.less";
import Link from "next/link";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  const handleClose = () => setClick(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  });

  const className = !colorChange
    ? styles.header
    : `${styles.header} ${styles.headerChangeColor}`;

  return (
    <>
      {click && <div onClick={handleClose} className={styles.overlay} />}
      <div className={className} style={colorChange ? {} : {}}>
        <div className={styles.container}>
          <h1
            className={styles.companyName}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // for smoothly scrolling
              });
            }}
          >
            <Link href="">
              <a className={!colorChange ? `${styles.colorWhite}` : ""}>
                DNFSOFT
              </a>
            </Link>
          </h1>
          <div
            className={
              click ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
            }
          >
            <Link href="#about">
              <a
                className={!colorChange ? `${styles.colorWhite}` : ""}
                onClick={handleClose}
              >
                About
              </a>
            </Link>
            <Link href="#team">
              <a
                className={!colorChange ? `${styles.colorWhite}` : ""}
                onClick={handleClose}
              >
                Team
              </a>
            </Link>
          </div>
          {click ? (
            <FaRegWindowClose
              onClick={handleClick}
              className={styles.navIcon}
              style={colorChange ? { color: "#165F9B" } : {}}
            />
          ) : (
            <FaBars
              onClick={handleClick}
              className={styles.navIcon}
              style={colorChange ? { color: "#165F9B" } : {}}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
