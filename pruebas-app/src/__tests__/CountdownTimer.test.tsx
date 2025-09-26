import { render, screen, fireEvent, act } from "@testing-library/react";
import { CountdownTimer } from "../components/CountdownTimer";

jest.useFakeTimers();

describe("CountdownTimer", () => {
  it("muestra tiempo inicial y decrece correctamente", () => {
    render(<CountdownTimer />);
    const input = screen.getByRole("spinbutton") as HTMLInputElement;

    fireEvent.change(input, { target: { value: 3 } });
    expect(input.value).toBe("3");

    const button = screen.getByText("Iniciar");
    fireEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("2")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText("¡Tiempo terminado!")).toBeInTheDocument();
  });
});
