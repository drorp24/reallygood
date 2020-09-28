import React from "react";

import styles from "./styles.module.scss";

const Border = ({ line = null, row = null }) => {
  const classes = [styles.Border];
  if (line !== null) {
    classes.push(styles.line);
    classes.push([styles.firstLine, styles.secondLine][line]);
  } else if (row !== null) {
    classes.push(styles.row);
    classes.push([styles.firstRow, styles.secondRow][row]);
  }

  return <div className={classes.join(" ")} />;
};

export default Border;
