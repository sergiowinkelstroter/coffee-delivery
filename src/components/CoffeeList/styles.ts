import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme.colors["base-title"]};
`;

export const CoffeeList = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 3.2rem;
`;
