import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  padding-inline: 5rem;
  padding-top: 1.2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-inline: 1rem;
  }
`;
