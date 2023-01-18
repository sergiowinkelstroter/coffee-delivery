import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CompleteOrderForm } from "../../components/CompleteOrderForm";
import * as C from "./styles";
import { useState } from "react";
import { PaymentButton } from "../../components/PaymentButton";
import { CardItem } from "../../components/CardItem";
import { useCart } from "../../hooks/useCart";
import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { priceFormatted } from "../../utils";
import { CartItem } from "../../components/CartItem";

const completeOrderSchema = zod.object({
  zipcode: zod.number().positive().min(5),
  street: zod.string().min(5),
  number: zod.number().positive().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(5),
  city: zod.string().min(5),
  uf: zod.string().min(2).max(2),
});

type CompleteOrderFormData = zod.infer<typeof completeOrderSchema>;

type MethodsPayment = "credit" | "debit" | "money";

const zeroBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(0);

export const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<MethodsPayment>(
    "" as MethodsPayment
  );
  const { cart, totalItems, addDeliveryInformation, clearCart } = useCart();
  const completeOrderForm = useForm<CompleteOrderFormData>({
    resolver: zodResolver(completeOrderSchema),
  });

  const { handleSubmit } = completeOrderForm;

  const onSubmit: SubmitHandler<CompleteOrderFormData> = (data) => {
    const { city, district, number, street, uf } = data;

    if (paymentMethod) {
      addDeliveryInformation({
        city,
        district,
        number,
        street,
        uf,
        paymentMethod,
      });
    }

    clearCart();
    console.log(addDeliveryInformation);
    navigate("/success");
  };

  const valueTotalItens = cart.reduce((acc, currentValue) => {
    const amount = currentValue.amount;
    const price = currentValue.product.price;

    acc += amount * price;
    return acc;
  }, 0);

  const valueTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valueTotalItens + 3.5);

  const totalAmountToShow = totalItems === 0 ? zeroBRL : valueTotal;
  const isDisableFields = totalItems === 0;

  return (
    <C.Checkout>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <C.CompleteOrder>
          <h2>Complete seu pedido</h2>
          <FormProvider {...completeOrderForm}>
            <CompleteOrderForm />
          </FormProvider>
        </C.CompleteOrder>

        <div>
          <header>
            <h2>Cafés selecionados</h2>
          </header>
          <C.CoffeeSelections>
            <C.CoffeeList>
              {cart.map((cart) => (
                <C.CartItemContainer key={cart.product.id}>
                  <CartItem product={cart.product} />
                </C.CartItemContainer>
              ))}
            </C.CoffeeList>
            <C.Totals>
              <label>
                Total de itens
                <span>{priceFormatted(valueTotalItens)}</span>
              </label>

              <label>
                Entrega
                <span>R$ 3,50</span>
              </label>

              <label>
                Total
                <span>{totalAmountToShow}</span>
              </label>
              <C.ConfirmOrder type="submit" disabled={isDisableFields}>
                Confirmar Pedido
              </C.ConfirmOrder>
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
            <PaymentButton
              type="button"
              selected={paymentMethod === "credit"}
              onClick={() => setPaymentMethod("credit")}
            >
              <CreditCard size={20} />
              Cartão de crédito
            </PaymentButton>
            <PaymentButton
              type="button"
              selected={paymentMethod === "debit"}
              onClick={() => setPaymentMethod("debit")}
            >
              <Bank size={20} />
              cartão de débito
            </PaymentButton>
            <PaymentButton
              type="button"
              selected={paymentMethod === "money"}
              onClick={() => setPaymentMethod("money")}
            >
              <Money size={20} />
              dinheiro
            </PaymentButton>
          </C.OptionsPayment>
        </C.PaymentContainer>
      </form>
    </C.Checkout>
  );
};
