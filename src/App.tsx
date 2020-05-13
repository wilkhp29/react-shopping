import React from "react";
import ShopProvider from "./contexts";
import Product from "./components/products";
import styled from "styled-components";

export const Container = styled.div``;

function App() {
  return (
    <ShopProvider>
      <Product />
    </ShopProvider>
  );
}

export default App;
