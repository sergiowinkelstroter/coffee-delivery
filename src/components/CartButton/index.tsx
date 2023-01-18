import { ShoppingCart } from "phosphor-react";
import * as C from "./styles";
import { useCart } from "../../hooks/useCart";

export const CartButton = () => {
  const { totalItems } = useCart();

  return (
    <C.CartButtonContainer to="/checkout">
      <ShoppingCart size={28} />
      {totalItems !== 0 && <C.Label>{totalItems}</C.Label>}
    </C.CartButtonContainer>
  );
};
