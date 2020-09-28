import React from "react";

import styles from "./styles.module.scss";

import Trophy from "../assets/trophy.svg";
import Crystal from "../assets/crystal.svg";

const Badge = ({ text, background, color, children }) => (
  <div className={styles.badge} style={{ background, color }}>
    <span>{text}</span>
    {children}
  </div>
);

export default Badge;
