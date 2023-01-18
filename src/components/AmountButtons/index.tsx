import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";
import { Coffee } from "../CardItem";
import { useCart } from "../../hooks/useCart";
import * as C from "./styles";

interface AmountButtonProps {
  product: Coffee;
}

export function AmountButtons({ product }: AmountButtonProps) {
  const { addProductToCart, removeProductUnitToCart, unitsPerProduct } =
    useCart();

  const handleAddProductToCart = () => addProductToCart(product);

  const handleRemoveProductToCart = () => removeProductUnitToCart(product.id);

  const amountInCart = unitsPerProduct(product.id);

  const buttonMinusDisabled = amountInCart === 0;

  return (
    <C.Container>
      <button
        type="button"
        onClick={handleRemoveProductToCart}
        disabled={buttonMinusDisabled}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{amountInCart}</span>
      <button type="button" onClick={handleAddProductToCart}>
        <Plus size={14} weight="bold" />
      </button>
    </C.Container>
  );
}
