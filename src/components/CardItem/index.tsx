import { ShoppingCart } from "phosphor-react";
import { priceFormatted } from "../../utils";
import { AmountButtons } from "../AmountButtons";
import * as C from "./styles";
import { useCart } from "../../hooks/useCart";

export interface Coffee {
  id: string;
  title: string;
  category: string[];
  description: string;
  image: string;
  price: number;
}

interface CardItemProps {
  coffee: Coffee;
}

export const CardItem = ({ coffee }: CardItemProps) => {
  const { addProductToCart } = useCart();

  const handleAddProductToCart = () => addProductToCart(coffee);

  return (
    <C.Container>
      <img src={coffee.image} alt={coffee.title} />
      <C.LabelList>
        {coffee.category.map((category) => (
          <C.Label key={category}>{category}</C.Label>
        ))}
      </C.LabelList>
      <C.Title>{coffee.title}</C.Title>
      <C.Description>{coffee.description}</C.Description>
      <C.Footer>
        <C.Price>
          <span>{priceFormatted(coffee.price)}</span>
        </C.Price>
        <AmountButtons product={coffee} />
        <C.CartButton onClick={handleAddProductToCart}>
          <ShoppingCart size={22} weight="fill" />
        </C.CartButton>
      </C.Footer>
    </C.Container>
  );
};
