import { addCar, addCount, removeCar, subtractCount, product } from "./shop";
import Products from "../components/products";

const Product: product = {
  name: "testing",
  count: 1,
  id: 1,
  img: "",
  price: 200,
};

describe("test shop state", () => {
  it("addCar Test", () => {
    const result = addCar({ products: [], cart: [] }, { product: Product });
    expect(result).toStrictEqual({ products: [], cart: [Product] });
  });

  it("removeCar test", () => {
    const result = removeCar(
      { products: [], cart: [Product] },
      { product: Product }
    );
    expect(result).toStrictEqual({ products: [], cart: [] });
  });

  it("addCount test", () => {
    const result = addCount(
      { products: [], cart: [Product] },
      { product: Product }
    );
    Product.count! += 1;
    expect(result).toStrictEqual({ products: [], cart: [Product] });
  });
  it("subtractCount test return cart empty", () => {
    const mock = { name: "testing", count: 1, id: 1, img: "", price: 200 };
    const mockCart = { name: "testing", count: 1, id: 1, img: "", price: 200 };
    const result = subtractCount(
      { products: [], cart: [mockCart] },
      { product: mock }
    );
    expect(result).toStrictEqual({ products: [], cart: [] });
  });

  it("subtractCount test return cart with count change", () => {
    const result = subtractCount(
      { products: [], cart: [Product] },
      { product: Product }
    );
    expect(result).toStrictEqual({ products: [], cart: [Product] });
  });
});
