import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-block: 5rem;

  @media (max-width: 768px) {
    div {
      grid-template-columns: 1fr;
    }
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const CoffeeList = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 3.2rem;
`;
