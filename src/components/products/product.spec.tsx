import React from "react";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react/";
import { Provider } from "react-redux";
import Product from "./index";
import { state } from "../../store/shop";
const product = {
  id: 1,
  count: null,
  img: "",
  name: "test product",
  price: 200,
};
const mockStore = configureStore();
const initialState: state = {
  products: [product],
  cart: [],
};
const setup = (newState: state | null = null) => {
  const store = mockStore({ ...initialState, ...newState });

  return render(
    <Provider store={store}>
      <Product />
    </Provider>
  );
};

describe("test of component product", () => {
  it("render", () => {
    const { getByText } = setup();

    const name = getByText("test product");
    const price = getByText("R$ 200,00");
    const btn = getByText("Adicionar ao carrinho");
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
  it("should count element items", () => {
    const { getAllByText } = setup();

    const elements = getAllByText("Adicionar ao carrinho");
    expect(elements.length).toBe(1);
  });
  it("should a text Remover do carrinho", () => {
    const { getByText } = setup({ ...initialState, cart: [product] });

    const btn = getByText("Remover do carrinho");
    const name = getByText("test product");
    const price = getByText("R$ 200,00");
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
