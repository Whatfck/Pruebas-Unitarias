import { render, screen, fireEvent } from "@testing-library/react";
import { ColorPicker } from "../components/ColorPicker";

describe("ColorPicker", () => {
  it("cambia el color del div al seleccionar", () => {
    render(<ColorPicker />);
    const input = screen.getByTestId("color-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "#ff0000" } });
    const div = screen.getByTestId("color-div");
    expect(div).toHaveStyle({ backgroundColor: "#ff0000" });
  });
});
