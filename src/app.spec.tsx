import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("App Render", () => {
    const { getAllByText } = render(<App />);
    const btns = getAllByText("Adicionar ao carrinho");
    expect(btns.length).toBe(8);
  });

  it("should return two 'Kit Matizador de Cabelos Pretos Intensive Black Forever Liss'", () => {
    const { getAllByText } = render(<App />);
    const btns = getAllByText("Adicionar ao carrinho");

    fireEvent.click(btns[1]);
    const nomes = getAllByText("Máscara Banho de Verniz 1kg Forever Liss");
    expect(btns[1].textContent).toBe("Remover do carrinho");
    expect(nomes.length).toBe(2);
  });

  it("should return remove item cart", () => {
    const { getAllByText } = render(<App />);
    const btns = getAllByText("Adicionar ao carrinho");

    fireEvent.click(btns[1]);
    const nomes = getAllByText("Máscara Banho de Verniz 1kg Forever Liss");
    expect(btns[1].textContent).toBe("Remover do carrinho");
    expect(nomes.length).toBe(2);
    fireEvent.click(btns[1]);
    expect(btns[1].textContent).toBe("Adicionar ao carrinho");
    expect(nomes.length).toBe(2);
  });
  it("should return change count", () => {
    const { getByTestId, getByText } = render(<App />);
    const plus = getByTestId("plus");
    const count = getByText("1");
    expect(count.textContent).toBe("1");
    fireEvent.click(plus);
    expect(count.textContent).toBe("2");
    fireEvent.click(plus);
    expect(count.textContent).toBe("3");
  });

  it("should return change count", () => {
    const { getByTestId, getByText } = render(<App />);
    const subtract = getByTestId("subtract");
    const count = getByText("3");
    expect(count.textContent).toBe("3");
    fireEvent.click(subtract);
    expect(count.textContent).toBe("2");
    fireEvent.click(subtract);
    expect(count.textContent).toBe("1");
  });
});
