import { ShoppingCart } from "phosphor-react";
import { priceFormatted } from "../../utils";
import { AmountButtons } from "../AmountButtons";
import * as C from "./styles";

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
  return (
    <C.Card>
      <C.Image src={coffee.image} />
      <C.Title>{coffee.title}</C.Title>
      <C.Description>{coffee.description}</C.Description>
      <C.Buy>
        <C.Price>{priceFormatted(coffee.price)}</C.Price>
        <div>
          <AmountButtons product={coffee} />
          <C.CartButton>
            <ShoppingCart />
          </C.CartButton>
        </div>
      </C.Buy>
    </C.Card>
  );
};
