import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Square from "../index";

describe("<Square />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Square />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
