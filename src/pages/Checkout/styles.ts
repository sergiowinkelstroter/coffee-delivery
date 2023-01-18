import styled from "styled-components";

export const Checkout = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  @media (min-width: 768px) {
    padding: 2rem;
  }
  > form {
    display: grid;
    gap: 2rem;
    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  font-family: ${(props) => props.theme.fonts.roboto};

  h2 {
    font-weight: bold;
  }

  header {
    margin-bottom: 1rem;
  }
`;

export const CompleteOrder = styled.div``;

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  width: 35rem;
`;

export const Header = styled.header`
  display: flex;
  gap: 0.4rem;

  svg {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  h4 {
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const OptionsPayment = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CoffeeSelections = styled.div`
  border-radius: 0 0 6px 44px;
  background: ${(props) => props.theme.colors["base-card"]};
  padding: 0 2.5rem 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1rem;
    }
    &:last-of-type {
      color: ${(props) => props.theme.colors["base-subtitle"]};
      font-size: 1.25rem;
      font-weight: bold;
      span {
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    }
  }
`;

export const Totals = styled.div`
  border-radius: 0 0 6px 44px;
  background: ${(props) => props.theme.colors["base-card"]};
  padding: 0 2.5rem 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  label {
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1rem;
    }
    &:last-of-type {
      color: ${(props) => props.theme.colors["base-subtitle"]};
      font-size: 1.25rem;
      font-weight: bold;
      span {
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    }
  }
`;

export const ConfirmOrder = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  height: 46px;
  background: ${(props) => props.theme.colors.yellow};
  border-radius: 6px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  transition: background 0.3s ease;
  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors["yellow-dark"]};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CoffeeList = styled.div`
  margin-top: 0.9375rem;
  background: ${(props) => props.theme.colors["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 44px 0 0;
  @media (min-width: 1024px) {
    padding: 2.5rem 1rem;
  }
`;

export const CartItemContainer = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};
  & + & {
    padding-top: 1.5rem;
  }
`;
