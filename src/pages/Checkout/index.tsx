import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CompleteOrder } from "../../components/CompleteOrder";
import * as C from "./styles";
import { useState } from "react";
import { PaymentButton } from "../../components/PaymentButton";

type MethodsPayment = "credit" | "debit" | "money";

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<MethodsPayment>(
    "" as MethodsPayment
  );

  return (
    <C.Checkout>
      <form action="">
        <C.CompleteOrder>
          <h2>Complete seu pedido</h2>
          <CompleteOrder />
        </C.CompleteOrder>

        <div>
          <header>
            <h2>Cafés selecionados</h2>
          </header>
          <C.CoffeeSelections>
            <C.Totals>
              <label>
                Total de itens
                <span>5</span>
              </label>

              <label>
                Entrega
                <span>R$ 3,50</span>
              </label>

              <label>
                Total
                <span>2</span>
              </label>
              <C.ConfirmOrder type="submit">Confirmar Pedido</C.ConfirmOrder>
            </C.Totals>
          </C.CoffeeSelections>
        </div>

        <C.PaymentContainer>
          <C.Header>
            <CurrencyDollar size={26} color="#8047F8" />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </C.Header>
          <C.OptionsPayment>
            <PaymentButton type="button" selected={paymentMethod === "credit"}>
              <CreditCard size={20} />
              Cartão de crédito
            </PaymentButton>
            <PaymentButton type="button" selected={paymentMethod === "debit"}>
              <Bank size={20} />
              cartão de débito
            </PaymentButton>
            <PaymentButton type="button" selected={paymentMethod === "money"}>
              <Money size={20} />
              dinheiro
            </PaymentButton>
          </C.OptionsPayment>
        </C.PaymentContainer>
      </form>
    </C.Checkout>
  );
};
