import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../src/app/page";

describe("Page", () => {
  it("renders the page", () => {
    render(<Page />);
  });
});
