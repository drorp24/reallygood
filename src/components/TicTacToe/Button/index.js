import React from "react";

import styles from "./styles.module.scss";
import lightenDarkenColor from "../../../utils/lightenDarkenColor";

// Of course the shadow color should be the button's bg color darkened rather than black
const Button = ({ children, onClick, background, shadow }) => {
  const darkerColor = lightenDarkenColor(background, -30);
  return (
    <div
      className={styles.root}
      onClick={onClick}
      style={{
        backgroundColor: background,
        boxShadow: shadow && `0px 5px ${darkerColor}`,
        color: darkerColor,
      }}
    >
      {children}
    </div>
  );
};

export default Button;
