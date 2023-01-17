import { MapPin } from "phosphor-react";

import * as C from "./styles";

export const CompleteOrder = () => {
  return (
    <C.CompleteOrderContainer>
      <C.Header>
        <MapPin size={26} />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </C.Header>
      <C.FormContainer>
        <C.InputBlock>
          <C.Input type="number" placeholder="CEP" />
        </C.InputBlock>
        <C.Input type="text" placeholder="Rua" />
        <C.InputContainer>
          <C.InputBlock>
            <C.Input type="number" placeholder="Número" />
          </C.InputBlock>
          <C.InputBlock className="optional">
            <C.Input type="text" placeholder="Complemento" />
          </C.InputBlock>
        </C.InputContainer>
        <C.InputContainer>
          <C.InputBlock>
            <C.Input type="text" placeholder="Bairro" />
          </C.InputBlock>
          <C.InputBlock className="city">
            <C.Input type="text" placeholder="Cidade" />
          </C.InputBlock>
          <C.InputBlock className="uf">
            <C.Input type="text" placeholder="UF" />
          </C.InputBlock>
        </C.InputContainer>
      </C.FormContainer>
    </C.CompleteOrderContainer>
  );
};
