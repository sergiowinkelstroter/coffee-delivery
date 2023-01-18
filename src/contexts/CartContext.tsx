import { ReactNode, createContext, useReducer, useState } from "react";
import { CartReducer } from "../reducers/Cart/reducer";
import { Coffee } from "../components/CardItem";
import {
  addProductToCartAction,
  clearCartAction,
  removeProductToCartAction,
  removeProductUnitAction,
} from "../reducers/Cart/actions";

interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  product: Coffee;
  amount: number;
}

interface Delivery {
  street: string;
  district: string;
  number: number;
  city: string;
  uf: string;
  paymentMethod: "credit" | "debit" | "money";
}

interface CartContextData {
  cart: CartItem[];
  totalItems: number;
  delivery: Delivery | null;
  addProductToCart: (product: Coffee) => void;
  removeProductUnitToCart: (id: string) => void;
  removeProductToCart: (id: string) => void;
  clearCart: () => void;
  unitsPerProduct: (id: string) => number;
  addDeliveryInformation: (information: Delivery) => void;
}

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = useReducer(CartReducer, { cart: [] });

  const [delivery, setDelivery] = useState<Delivery | null>(null);

  const { cart } = cartState;

  const totalItems = cart.length;

  const addProductToCart = (product: Coffee) => {
    dispatch(addProductToCartAction(product));
  };

  const removeProductUnitToCart = (id: string) => {
    dispatch(removeProductUnitAction(id));
  };

  const removeProductToCart = (id: string) => {
    dispatch(removeProductToCartAction(id));
  };

  const clearCart = () => dispatch(clearCartAction());

  function unitsPerProduct(id: string) {
    const cartItem = cart.find((item) => item.product.id === id);

    return cartItem?.amount ?? 0;
  }

  const addDeliveryInformation = (information: Delivery) => {
    setDelivery(information);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addProductToCart,
        removeProductToCart,
        removeProductUnitToCart,
        clearCart,
        delivery,
        unitsPerProduct,
        addDeliveryInformation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
