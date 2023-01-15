import { priceFormatted } from "../../utils";
import * as C from "./styles";

interface Coffee {
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
      </C.Buy>
    </C.Card>
  );
};
