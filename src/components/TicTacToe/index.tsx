import React, { memo } from "react";

import Square from "./Square";
import styles from "./styles.module.scss";

export default memo(
  (): JSX.Element => (
    <div className={styles.TicTacToe}>
      <div className={styles.Container}>
        <div className={styles.instructions}>Next player: X</div>
        <div className={styles.instructions}>Winner: None</div>
        <button className={styles.button} type="button">
          Reset
        </button>

        <div className={styles.Board}>
          <div className={styles.row}>
            <Square />
            <Square />
            <Square />
          </div>
          <div className={styles.row}>
            <Square />
            <Square />
            <Square />
          </div>
          <div className={styles.row}>
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    </div>
  )
);
