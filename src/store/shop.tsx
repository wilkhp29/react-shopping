import { createActions, createReducer } from "reduxsauce";

export const INITIAL_STATE: state = {
  products: [
    {
      id: 1,
      name: "Kit Profissional Shampoo e Máscara de Mandioca Forever Liss",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000",
      price: 27.99,
      count: null,
    },
    {
      id: 2,
      name: "Máscara Banho de Verniz 1kg Forever Liss",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/159038-240-240/mascara-banho-de-verniz-brilho-e-hidratacao-extrema-forever-liss-1kg.jpg?v=637103128347670000",
      price: 32.99,
      count: null,
    },
    {
      id: 3,
      name: "Kit Matizador de Cabelos Pretos Intensive Black Forever Liss",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/158849-240-240/Kit-Matizador-de-Cabelos-Pretos-Intensive-Black-Forever-Liss.jpg?v=637064118896000000",
      price: 36.99,
      count: null,
    },
    {
      id: 4,
      name:
        "Kit Babosa no Cabelo Forever Liss com Shampoo 300ml e Máscara 250g",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/158630-240-240/Kit-Babosa-no-Cabelo-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014049994200000",
      price: 29.99,
      count: null,
    },
    {
      id: 5,
      name: "Máscara de Babosa Hidratação Profunda Forever Liss 950g",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/157312-240-240/Mascara-de-Babosa-Hidratacao-Profunda-Forever-Liss-950g.jpg?v=636925124889830000",
      price: 59.99,
      count: null,
    },
    {
      id: 6,
      name: "Máscara de Babosa Hidratação Profunda Forever Liss 950g",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/157312-240-240/Mascara-de-Babosa-Hidratacao-Profunda-Forever-Liss-950g.jpg?v=636925124889830000",
      price: 29.99,
      count: null,
    },
    {
      id: 7,
      name: "Kit Profissional Shampoo e Máscara de Mandioca Forever Liss",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000",
      price: 27.99,
      count: null,
    },
    {
      id: 8,
      name: "Kit Profissional Shampoo e Máscara de Mandioca Forever Liss",
      img:
        "https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000",
      price: 27.99,
      count: null,
    },
  ],
  cart: [],
};

export type state = {
  products: Array<product>;
  cart: Array<product>;
};

export type product = {
  id: number;
  name: string;
  price: number;
  img: string;
  count: number | null;
};

export const { Types, Creators } = createActions({
  addCar: ["product"],
  removeCar: ["product"],
  addCount: ["product"],
  subtractCount: ["product"],
});

export const addCar = (state: state = INITIAL_STATE, { product }: any) => {
  product.count = 1;
  const position = state.cart.indexOf(product);
  if (position >= 0) return state;
  return { ...state, cart: [...state.cart, product] };
};

export const removeCar = (state: state = INITIAL_STATE, { product }: any) => {
  const newCart = state.cart.filter(
    (CartProduct) => CartProduct.id !== product.id
  );
  return { ...state, cart: newCart };
};

export const addCount = (state: state = INITIAL_STATE, { product }: any) => {
  const indexCount = state.cart.indexOf(product);
  const cart = state.cart;
  product.count! += 1;
  cart[indexCount] = product;

  return { ...state, cart };
};

export const subtractCount = (
  state: state = INITIAL_STATE,
  { product }: any
) => {
  const indexCount = state.cart.indexOf(product);
  const cart = state.cart;
  product.count! -= 1;
  if (product.count === 0) {
    return {
      ...state,
      cart: state.cart.filter((CartProduct) => CartProduct.id !== product.id),
    };
  }
  cart[indexCount] = product;
  return { ...state, cart };
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CAR]: addCar,
  [Types.ADD_COUNT]: addCount,
  [Types.REMOVE_CAR]: removeCar,
  [Types.SUBTRACT_COUNT]: subtractCount,
} as any);
