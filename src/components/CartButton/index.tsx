import { ShoppingCart } from "phosphor-react";
import * as C from "./styles";

export const CartButton = () => {
  const totalItems: number = 1;

  return (
    <C.CartButtonContainer to="/checkout">
      <ShoppingCart size={28} />
      {totalItems !== 0 && <C.Label>{totalItems}</C.Label>}
    </C.CartButtonContainer>
  );
};
