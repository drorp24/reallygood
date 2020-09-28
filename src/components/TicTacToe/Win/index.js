import React from "react";

import styles from "./styles.module.scss";

const Win = ({ line = null, row = null, diagonal = null }) => {
  const classes = [styles.Win];
  if (line !== null) {
    classes.push(styles.line);
    classes.push([styles.firstLine, styles.secondLine, styles.thirdLine][line]);
  } else if (row !== null) {
    classes.push(styles.row);
    classes.push([styles.firstRow, styles.secondRow, styles.thirdRow][row]);
  } else if (diagonal) {
    classes.push(styles.diagonal);
    classes.push(diagonal === "left" ? styles.left : styles.right);
  }

  return <div className={classes.join(" ")} />;
};

export default Win;
