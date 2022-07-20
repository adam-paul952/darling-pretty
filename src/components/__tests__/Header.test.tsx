import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("<Header />", () => {
  it("should display the header", () => {
    render(<Header />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
