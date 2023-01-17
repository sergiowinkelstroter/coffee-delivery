import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";
import { Coffee } from "../CardItem";

interface AmountButtonProps {
  product: Coffee;
}

export function AmountButtons({ product }: AmountButtonProps) {
  const amountInCart = 0;

  const buttonMinusDisabled = amountInCart === 0;

  return (
    <Container>
      <button type="button" disabled={buttonMinusDisabled}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{amountInCart}</span>
      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  );
}
