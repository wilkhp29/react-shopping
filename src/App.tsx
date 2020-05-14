import React from "react";
import { Provider } from "react-redux";
import Store from "./store";
import Product from "./components/products";
import Cart from "./components/cart";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  Product {
    display: flex;
    flex: 2;
  }
  Cart {
    display: flex;
    flex: 1;
  }
`;

function App() {
  return (
    <Provider store={Store}>
      <Container>
        <Product />
        <Cart />
      </Container>
    </Provider>
  );
}

export default App;
