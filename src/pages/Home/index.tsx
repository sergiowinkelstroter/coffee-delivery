import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import * as C from "./styles";
import Imagem from "../../assets/Imagem.png";
import { CoffeeList } from "../../components/CoffeeList";

export const Home = () => {
  return (
    <C.HomeContainer>
      <C.HomePresentation>
        <div>
          <div>
            <h1>
              Encontre o café perfeito para
              <br /> qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <C.QualitiesServiceContainer>
            <C.QualitiesService>
              <C.QualitiesServiceIcon style={{ background: "#C47F17" }}>
                <ShoppingCart />
              </C.QualitiesServiceIcon>
              <span>Compra simples e segura</span>
            </C.QualitiesService>
            <C.QualitiesService>
              <C.QualitiesServiceIcon style={{ background: "#574F4D" }}>
                <Package />
              </C.QualitiesServiceIcon>
              <span>Embalagem mantém o café intacto</span>
            </C.QualitiesService>
            <C.QualitiesService>
              <C.QualitiesServiceIcon style={{ background: "#DBAC2C" }}>
                <Timer />
              </C.QualitiesServiceIcon>
              <span>Entrega rápida e rastreada</span>
            </C.QualitiesService>
            <C.QualitiesService>
              <C.QualitiesServiceIcon style={{ background: "#8047F8" }}>
                <Coffee />
              </C.QualitiesServiceIcon>
              <span>O café chega fresquinho até você</span>
            </C.QualitiesService>
          </C.QualitiesServiceContainer>
        </div>
        <img src={Imagem} alt="" />
      </C.HomePresentation>
      <CoffeeList />
    </C.HomeContainer>
  );
};
