import React, { memo } from "react";
import { Helmet } from "react-helmet";

import { TicTacToe } from "../../components";
import styles from "./styles.module.scss";

const Home = (): JSX.Element => {
  return (
    <div className={styles.Home}>
      <Helmet title="Game" />
      <TicTacToe />
    </div>
  );
};

export default memo(Home);
