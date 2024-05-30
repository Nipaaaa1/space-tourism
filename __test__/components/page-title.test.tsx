import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { PageTitle } from "../../src/components/page-title";

describe("Page Title", () => {
  it("should render title when pageIndex and pageTitle is provided", () => {
    render(<PageTitle pageIndex="02" pageTitle="MEET YOUR CREW" />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent(/MEET YOUR CREW/i);
  });
});
