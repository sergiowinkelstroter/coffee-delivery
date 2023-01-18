import { Trash } from "phosphor-react";
import { priceFormatted } from "../../utils";
import { AmountButtons } from "../AmountButtons";
import { Coffee } from "../CardItem";
import * as C from "./styles";
import { useCart } from "../../hooks/useCart";

interface CartItemProps {
  product: Coffee;
}

export const CartItem = ({ product }: CartItemProps) => {
  const { removeProductToCart } = useCart();

  const handleRemoveProductToCart = () => {
    removeProductToCart(product.id);
  };

  return (
    <C.Container>
      <img src={product.image} alt={product.title} />
      <div>
        <C.Title>{product.title}</C.Title>
        <C.AmountContainer>
          <AmountButtons product={product} />
          <C.RemoveButton onClick={handleRemoveProductToCart}>
            <Trash size={15} />
            Remover
          </C.RemoveButton>
        </C.AmountContainer>
      </div>
      <C.Price>{priceFormatted(product.price)}</C.Price>
    </C.Container>
  );
};
