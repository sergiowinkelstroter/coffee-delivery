import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.2rem;
  gap: 2rem;
  border-radius: 6px;

  width: 35rem;
  height: 22rem;
  margin-top: 1rem;

  background: ${(props) => props.theme.colors["base-card"]};
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

export const Input = styled.input`
  background: ${(props) => props.theme.colors["base-input"]};
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  border-radius: 4px;
  width: 100%;
  height: 42px;
  padding: 0 0.8rem;
  color: ${(props) => props.theme.colors["base-text"]};
  font-size: 14px;
  outline-color: ${(props) => props.theme.colors["yellow-dark"]};
  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
    text-transform: capitalize;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FormContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputBlock = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    &:not(.city, .optional) {
      flex: none;
      max-width: 200px;
    }
    &.uf {
      max-width: 60px;
    }
  }
  &.optional {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &::after {
      content: "Opcional";
      position: absolute;
      right: 10px;
      font-size: 12px;
      font-style: italic;
      color: ${(props) => props.theme.colors["base-label"]};
    }
  }
`;
