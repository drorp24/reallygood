// @ts-nocheck

import React, { memo } from "react";

import styles from "./styles.module.scss";

// I sometimes assume there could be some more ('...rest') arguments that I need to pass onwards to the child
// The reason I did it here is that in a real app I would want to highlight the 'winning squares'.
// To do that I would need to control the styling of the Square component from its parent
// and '...rest' could help in that.
export default memo(function Square({ value, onClick, ...rest }): JSX.Element {
  // TODO: fix...
  const color = value === "X" ? "#50a1d2" : "#333";
  return (
    <div className={styles.Square} style={{ color }} {...{ onClick, ...rest }}>
      {value}
    </div>
  );
});
