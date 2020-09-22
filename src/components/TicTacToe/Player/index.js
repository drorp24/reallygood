// @ts-nocheck
import React from "react";

import styles from "./styles.module.scss";

import Captain from "../assets/captain.svg";
import Batman from "../assets/batman.svg";
import Crystal from "../assets/crystal.svg";
import Trophy from "../assets/trophy.svg";

import Badge from "../Badge";

// See comments about using theme as opposed to hard-coded colors
const Player = ({ gameOver, currentPlayer, winner }) => {
  const next = (symbol) => {
    if (winner && winner === symbol) {
      return (
        <Badge
          text="Winner"
          color="#fcbd11"
          background="rgba(251, 212, 58, 0.44)"
        >
          <img src={Trophy} alt="Trophy" />
        </Badge>
      );
    }
    if (!gameOver && currentPlayer === symbol) {
      return (
        <Badge text="Plays Next" background="white" color="#a061ff">
          <img src={Crystal} alt="Crystal" />
        </Badge>
      );
    }
    return "";
  };

  // The `${styles.symbol} x` doesnt work
  // but with css-in-js this should have been a piece of cake, without all this class concatenation
  return (
    <div className={styles.container}>
      <div className={styles.player1}>
        <div className={styles.playerBox}>
          <div className={`${styles.symbol} x`}>X</div>
          <div className={styles.playerLine}>
            <div>
              <img src={Captain} alt="Captain" />
            </div>
            <div>Player 1</div>
          </div>
          <div className={styles.next}>{next("X")}</div>
        </div>
      </div>
      <div className={styles.player2}>
        <div className={styles.playerBox}>
          <div className={`${styles.symbol} o`}>O</div>
          <div className={styles.playerLine}>
            <div>Player 2</div>
            <div>
              <img src={Batman} alt="Captain" />
            </div>
          </div>
          <div className={styles.next}>{next("O")}</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
