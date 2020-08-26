import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TicTacToe from "../index";

describe("<TicTacToe />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <TicTacToe />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
