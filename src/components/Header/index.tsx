import * as C from "./styles";
import logo from "../../assets/logo.svg";
import MapsPin from "../../assets/MapsPin.svg";
import { CartButton } from "../CartButton";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <C.LogoButton to="/">
        <img src={logo} alt="" />
      </C.LogoButton>
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
