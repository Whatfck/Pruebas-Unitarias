import { render, screen, fireEvent } from "@testing-library/react";
import { SearchList } from "../components/SearchList"; // ← Cambiado

describe("SearchList", () => {
  it("filtra la lista correctamente y muestra 'No encontrado'", () => {
    render(<SearchList />);
    const input = screen.getByPlaceholderText("Buscar fruta...");

    fireEvent.change(input, { target: { value: "Manzana" } });
    expect(screen.getByText("Manzana")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "zzz" } });
    expect(screen.getByText("No encontrado")).toBeInTheDocument();
  });
});
