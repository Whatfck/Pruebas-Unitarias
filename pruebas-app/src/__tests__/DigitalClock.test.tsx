import { render, screen, act } from "@testing-library/react";
import { DigitalClock } from "../components/DigitalClock";

jest.useFakeTimers();

describe("DigitalClock", () => {
  it("muestra la hora en formato HH:MM:SS AM/PM", () => {
    render(<DigitalClock />);
    const clock = screen.getByText(/\d{2}:\d{2}:\d{2} (AM|PM)/);
    expect(clock).toBeInTheDocument();
  });

  it("se actualiza cada segundo", () => {
    render(<DigitalClock />);
    const firstRender = screen.getByText(/\d{2}:\d{2}:\d{2} (AM|PM)/).textContent;
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const secondRender = screen.getByText(/\d{2}:\d{2}:\d{2} (AM|PM)/).textContent;
    expect(secondRender).not.toBe(firstRender);
  });
});
