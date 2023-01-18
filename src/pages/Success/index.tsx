import { Navigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import * as C from "./styles";

export function Success() {
  const { delivery } = useCart();

  if (!delivery) {
    return <Navigate to="/" />;
  }

  return (
    <C.Main>
      <C.ConfirmedOrder>
        <header>
          <h2>Uhu! Pedido Confirmado</h2>
        </header>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <C.LabelsList>
          <C.Label>
            <C.MapPinIcon size={32} weight="fill" />
            <C.TextGroup>
              <C.Text>
                Entrega em{" "}
                <span>
                  Rua {delivery?.street}, {delivery?.number}
                </span>
              </C.Text>
              <C.Text>
                {delivery?.district} - {delivery?.city}, {delivery?.uf}
              </C.Text>
            </C.TextGroup>
          </C.Label>

          <C.Label>
            <C.ClockIcon size={32} weight="fill" />
            <C.TextGroup>
              <C.Text>Previsão de entrega</C.Text>
              <C.Text>
                <span>20 min - 30 min</span>
              </C.Text>
            </C.TextGroup>
          </C.Label>
          <C.Label>
            <C.CurrencyDollarIcon size={32} weight="fill" />
            <C.TextGroup>
              <C.Text>Pagamento na entrega</C.Text>
              <C.Text>
                {delivery?.paymentMethod === "credit" && (
                  <span>Cartão de Crédito</span>
                )}
                {delivery?.paymentMethod === "debit" && (
                  <span>Cartão de Débito</span>
                )}
                {delivery?.paymentMethod === "money" && <span>Dinheiro</span>}
              </C.Text>
            </C.TextGroup>
          </C.Label>
        </C.LabelsList>
      </C.ConfirmedOrder>
      <C.Illustration />
    </C.Main>
  );
}
