import React, { useMemo } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { state, Creators } from "../../store/shop";

export const Container = styled.div`
  min-width: 300px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      img {
        width: 50px;
      }
      button {
        margin-left: 5px;
        background-color: red;
        color: #fff;
      }
    }
    footer {
      display: flex;
      border-bottom: 1px solid #cccccc;
      flex: 1;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 5px;
      button {
        margin: 0 10px;
      }
    }
  }
`;
export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  span {
    font-size: 15px;
    font-weight: 200;
  }
`;

const Cart: React.FC = () => {
  const cart = useSelector((state: state) =>
    state.cart.map((product) => product)
  );
  const dispatch = useDispatch();
  const total = useMemo(
    () =>
      cart.reduce(
        (total, product) => total + (product.count || 1) * product.price,
        0
      ),
    [cart]
  );
  return (
    <Container>
      <h3>Carrinho de compras</h3>
      {cart.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.img} alt={product.name} />
            <h6>{product.name}</h6>
            <span>
              {product.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <button onClick={() => dispatch(Creators.removeCar(product))}>
              x
            </button>
          </div>
          <footer>
            <button
              onClick={() => {
                dispatch(Creators.subtractCount(product));
              }}
              data-testid="subtract"
            >
              -
            </button>
            <span>{product.count}</span>
            <button
              onClick={() => {
                dispatch(Creators.addCount(product));
              }}
              type="button"
              data-testid="plus"
            >
              +
            </button>
          </footer>
        </div>
      ))}
      {cart.length === 0 && (
        <>
          <span>Carrinho vazio</span>
          <hr />
        </>
      )}
      <ContainerTotal>
        <h4>
          Total:{" "}
          <span>
            {total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </h4>
      </ContainerTotal>
    </Container>
  );
};

export default Cart;
