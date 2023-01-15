import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
  }
`;

export const Localization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  width: 9rem;
  height: 2.2rem;
  padding: 0.2rem;

  color: ${(props) => props.theme.colors["purple-dark"]};
  background-color: ${(props) => props.theme.colors["purple-light"]};
  border-radius: 6px;
`;
