import React from "react";

import { render } from "@testing-library/react";

import Hero from "../Hero";

const heroLoading = { data: null, loading: true };

describe("<Hero />", () => {
  it("should render the hero", () => {
    render(<Hero heroData={heroLoading} />);
  });
});
