import { CardItem } from "../CardItem/index.js";
import { coffees } from "../../utils/coffees.js";
import * as C from "./styles";

export const CoffeeList = () => {
  return (
    <C.CoffeeListContainer>
      <C.Title>Nossos cafés</C.Title>
      <C.CoffeeList>
        {coffees.map((coffee) => (
          <CardItem key={coffee.id} coffee={coffee} />
        ))}
      </C.CoffeeList>
    </C.CoffeeListContainer>
  );
};
