import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders el título de la app", () => {
  render(<App />);
  const titleElement = screen.getByText(/Pruebas de Componentes/i);
  expect(titleElement).toBeInTheDocument();
});
