/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import styles from "./index.module.less";

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

  return (
    <>
      {click && <div onClick={handleClose} className={styles.overlay} />}
      <div
        className={styles.header}
        style={
          colorChange
            ? {
                backgroundColor: "#f7f7f7",
                boxShadow: "4px 0 20px -5px rgb(0 0 0 / 10%)",
              }
            : {}
        }
      >
        <div className={styles.container}>
          <p
            className={styles.companyName}
            style={!colorChange ? { color: "#fff" } : {}}
          >
            DNFSOFT
          </p>
          <div
            className={
              click ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
            }
          >
            Nav Menu
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
