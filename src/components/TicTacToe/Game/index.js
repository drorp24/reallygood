import React from "react";

import styles from "./styles.module.scss";
import Replay from "../assets/replay.svg";
import Star from "../assets/star.svg";
import Settings from "../assets/settings.svg";
import Button from "../Button";

// Of course the backgrounds should be taken from some theme rather than hard coded
const Game = ({ reset, gameOver, winner }) => (
  <div className={styles.gameContainer}>
    <Button onClick={reset} background="#999bfb" shadow>
      <span className="resetContainer">
        <img src={Replay} alt="Replay" />
      </span>
    </Button>
    <div style={{ visibility: winner || gameOver ? "visible" : "hidden" }}>
      <Button background="#fbc399" shadow>
        <div>Rate us</div>
        <div>
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              <img src={Star} alt="Star" />
            </span>
          ))}
        </div>
      </Button>
    </div>
    <Button background="#9E9E9E" shadow>
      <div>Settings</div>
      <img src={Settings} alt="Settings" />
    </Button>
  </div>
);

export default Game;
