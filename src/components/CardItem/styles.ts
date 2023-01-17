import styled from "styled-components";

export const Card = styled.div`
  width: 16rem;
  height: 19.3rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  background-color: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px;
`;

export const Image = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  left: calc(50% - 120px / 2);
  top: -20px;
`;

export const Title = styled.h3`
  margin-top: 130px;

  font-weight: 700;
  font-size: 1.2rem;
  line-height: 130%;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const Description = styled.p`
  position: absolute;
  height: 36px;
  left: 20px;
  right: 20px;
  top: 163px;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  text-align: center;

  color: ${(props) => props.theme.colors["base-label"]};
`;

export const Buy = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 1rem;

  position: absolute;
  height: 38px;
  left: 24px;
  right: 24px;
  bottom: 20px;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Price = styled.span`
  width: 67px;
  height: 31px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 130%;

  text-align: right;

  color: ${(props) => props.theme.colors["base-text"]};
`;

export const CartButton = styled.button`
  background: ${(props) => props.theme.colors["purple-dark"]};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }
`;
