// @ts-nocheck
import React, { memo, useState } from "react";

import Square from "./Square";
import Player from "./Player";
import Game from "./Game";
import styles from "./styles.module.scss";
import game from "../../config/game";

// while there are things that I left out of this excercise for time constrains,
// this one seemed simple enough to not steal too much of my time (and it definitely makes the code prettier)
// However, for the time constraint I didn't generalize the styling to adapt to the dimensions.
// So, if you would change the config to any other dimension it would work - but won't look too pretty...
const { dimensions } = game;
const squares = dimensions ** 2 - 1;

// I chose to control the entire board's state here rather than letting any Sqaure control its own 'X'/'O' state
// because I need to check here after every move if game is won or over.

const initialState = {
  emptyBoard: () =>
    new Array(dimensions).fill("").map(() => new Array(dimensions).fill("")),
  currentPlayer: "X",
  moves: 0,
  gameOver: false,
  winner: "",
};

export default memo(function TicTacToe(): JSX.Element {
  // I could place all these state parts in one object but the code seems clearer when they're split
  // I'm not destructuring initialState for the same reason
  const [board, setBoard] = useState(initialState.emptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState(
    initialState.currentPlayer
  );
  const [moves, setMoves] = useState(initialState.moves);
  const [gameOver, setGameOver] = useState(initialState.gameOver);
  const [winner, setWinner] = useState(initialState.winner);

  const togglePlayer = () =>
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

  // Since we're checking this following every move, a potential win can only occur in either
  //   -- the last move's line or row (i.e., no need to check all other lines and rows), or
  //   -- any of the 2 diagonals (in case line & row happen to be placed on either)
  const winning = ({ line, row }) =>
    board[line].every((_, row) => board[line][row] === currentPlayer) ||
    board.reduce(
      (acc, _, line) => acc && board[line][row] === currentPlayer,
      true
    ) ||
    (line === row &&
      board.reduce(
        (acc, _, line) => acc && board[line][line] === currentPlayer,
        true
      )) ||
    (line + row === dimensions - 1 &&
      board.reduce(
        (acc, _, line) =>
          acc && board[line][dimensions - line - 1] === currentPlayer,
        true
      ));

  // By referring to the 'board' variable from the closure, handleClick can be passed to Square components
  // and is guaranteed to get board's most current value
  const handleClick = ({ line, row }) => () => {
    if (!gameOver && board[line][row] === "") {
      board[line][row] = currentPlayer;
      setBoard(board);
      setMoves(moves + 1);
      if (winning({ line, row })) {
        setWinner(currentPlayer);
        setGameOver(true);
      } else if (moves === squares) {
        setGameOver(true);
      } else {
        togglePlayer();
      }
    }
  };

  const reset = () => {
    // See comments about splitting state and not destructuring initialState
    setBoard(initialState.emptyBoard());
    setCurrentPlayer(initialState.currentPlayer);
    setMoves(initialState.moves);
    setGameOver(initialState.gameOver);
    setWinner(initialState.winner);
  };

  // The fact Square passess onwards '...rest' arguments allows me to control its style from here
  // TODO: Like Player & Game, Row & Board should also be defined outside and imported here
  const Row = ({ item, line }) => (
    <div className={styles.row}>
      {item.map((_, row) => {
        // I know it's meant to be rounded-corners' rectangles; this is a shortcut I'm doing
        // border's color, width and style would be taken from some theme rather than hard coded
        const border = "6.5px solid rgba(34, 99, 178, 0.5)";
        const borderBottom = line === 0 ? border : "none";
        const borderTop = line === 2 ? border : "none";
        const borderRight = row === 0 ? border : "none";
        const borderLeft = row === 2 ? border : "none";
        return (
          <Square
            key={`${line}${row}`}
            value={board[line][row]}
            onClick={handleClick({ line, row })}
            style={{ borderBottom, borderTop, borderRight, borderLeft }}
          />
        );
      })}
    </div>
  );

  const Board = () =>
    board.map((item, line) => {
      return <Row key={line} {...{ item, line }} />;
    });

  return (
    <div className={styles.TicTacToe}>
      <div className={styles.Player}>
        <Player {...{ gameOver, currentPlayer, winner }} />
      </div>
      <div className={styles.Board}>
        <Board />
      </div>
      <div className={styles.Game}>
        <Game {...{ reset, gameOver, winner }} />
      </div>
    </div>
  );
});
