import React, { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { state, Creators } from "../../store/shop";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
  }
`;

const Products: FC = () => {
  const { products, cart } = useSelector((state: state) => state);
  const dispatch = useDispatch();

  const checkCart = useCallback(
    (product) => {
      const result = cart.indexOf(product);
      return result >= 0;
    },
    [cart]
  );

  return (
    <Container>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} />
          <h4>{product.name}</h4>
          <span>
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button
            onClick={() => {
              dispatch(
                checkCart(product)
                  ? Creators.removeCar(product)
                  : Creators.addCar(product)
              );
            }}
          >
            {checkCart(product)
              ? "Remover do carrinho"
              : "Adicionar ao carrinho"}
          </button>
        </div>
      ))}
    </Container>
  );
};

export default Products;
