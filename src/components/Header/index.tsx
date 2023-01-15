import * as C from "./styles";
import logo from "../../assets/logo.svg";
import MapsPin from "../../assets/MapsPin.svg";
import { CartButton } from "../CartButton";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <C.Localization>
          <img src={MapsPin} alt="" />
          Açailândia, MA
        </C.Localization>
        <CartButton />
      </nav>
    </C.HeaderContainer>
  );
};
