import { Navlink } from "@/components/navlinks";
import { render, screen } from "@testing-library/react";

describe("navlinks", () => {
  const value = {
    index: "02",
    href: "/crew",
    name: "CREW",
  };
  it("Should render a link element if all value is provided", () => {
    render(<Navlink {...value} />);

    const name = screen.getByText(value.name);

    expect(name).toBeInTheDocument();
  });
});
