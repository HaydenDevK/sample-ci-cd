import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";
import { describe } from "node:test";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const home = screen.getByText("Home");

    expect(home).toBeInTheDocument();
  });
});
