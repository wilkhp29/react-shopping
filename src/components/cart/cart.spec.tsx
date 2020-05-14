import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Cart from "./index";
import { state } from "../../store/shop";
let cart = {
  id: 1,
  count: 1,
  img: "",
  name: "test Cart",
  price: 200,
};
const mockStore = configureStore();
const initialState: state = {
  products: [],
  cart: [],
};
const setup = (newState: state | null = null) => {
  const store = mockStore({ ...initialState, ...newState });
  return render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

describe("test of component Cart", () => {
  it("render", () => {
    let newCart = cart;
    newCart.count = 1;
    const { getByText, getAllByText } = setup({
      ...initialState,
      cart: [newCart],
    });

    const name = getByText("test Cart");
    const price = getAllByText("R$ 200,00")[0];
    const count = getByText("1");
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  it("should a text 'Remover do carrinho'", () => {
    let newCart = cart;
    newCart.count = 10;
    newCart.name = "william";
    newCart.price = 300;
    const { getByText, getAllByText } = setup({
      ...initialState,
      cart: [newCart],
    });

    const count = getByText("10");
    const name = getByText("william");
    const price = getAllByText("R$ 300,00")[0];
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  it("should a all value of cart", () => {
    let newCart = {
      id: 3,
      count: 10,
      name: "william",
      price: 300,
      img: "",
    };

    const { getByText } = setup({
      ...initialState,
      cart: [newCart, cart],
    });

    const total = getByText("Total:");
    const allValue = getByText("R$ 6.000,00");
    expect(total).toBeInTheDocument();
    expect(allValue).toBeInTheDocument();
  });

  it("should cart empty element items", () => {
    const { getByText } = setup();

    const element = getByText("Carrinho vazio");
    expect(element).toBeInTheDocument();
  });
});
