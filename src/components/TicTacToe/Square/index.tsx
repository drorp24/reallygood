// @ts-nocheck

import React, { memo } from "react";

import styles from "./styles.module.scss";

// memo will save that component from getting re-rendered with every change in board or toggle of currentPlayer
//
// I sometimes assume there could be some more ('...rest') arguments that I need to pass onwards to the child
// The reason I did it here is that in a real app I would want to highlight the 'winning squares'.
// To do that I would need to control the styling of the Square component from its parent
// and '...rest' could help in that.
export default memo(
  ({ board, line, row, currentPlayer, handleClick, ...rest }): JSX.Element => (
    <div
      className={styles.Square}
      onClick={handleClick({ line, row })}
      {...rest}
    >
      {board[line][row]}
    </div>
  )
);
