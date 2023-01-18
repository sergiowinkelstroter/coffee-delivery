import { MapPin } from "phosphor-react";

import * as C from "./styles";
import { useFormContext } from "react-hook-form";
import { useCart } from "../../hooks/useCart";

export const CompleteOrderForm = () => {
  const { register } = useFormContext();
  const { totalItems } = useCart();

  const isDisableField = totalItems === 0;

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
          <C.Input
            type="number"
            placeholder="CEP"
            min={0}
            disabled={isDisableField}
            {...register("zipcode", { valueAsNumber: true, required: true })}
          />
        </C.InputBlock>
        <C.Input
          type="text"
          placeholder="Rua"
          disabled={isDisableField}
          {...register("street", { required: true })}
        />
        <C.InputContainer>
          <C.InputBlock>
            <C.Input
              type="number"
              placeholder="Número"
              min={0}
              disabled={isDisableField}
              {...register("number", { valueAsNumber: true, required: true })}
            />
          </C.InputBlock>
          <C.InputBlock className="optional">
            <C.Input
              type="text"
              placeholder="Complemento"
              disabled={isDisableField}
              {...register("complement")}
            />
          </C.InputBlock>
        </C.InputContainer>
        <C.InputContainer>
          <C.InputBlock>
            <C.Input
              type="text"
              placeholder="Bairro"
              disabled={isDisableField}
              {...register("district", { required: true })}
            />
          </C.InputBlock>
          <C.InputBlock className="city">
            <C.Input
              type="text"
              placeholder="Cidade"
              disabled={isDisableField}
              {...register("city", { required: true })}
            />
          </C.InputBlock>
          <C.InputBlock className="uf">
            <C.Input
              type="text"
              placeholder="UF"
              disabled={isDisableField}
              {...register("uf", { required: true })}
            />
          </C.InputBlock>
        </C.InputContainer>
      </C.FormContainer>
    </C.CompleteOrderContainer>
  );
};
