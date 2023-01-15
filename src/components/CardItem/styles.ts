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
  gap: 29px;

  position: absolute;
  height: 38px;
  left: 24px;
  right: 24px;
  bottom: 20px;
`;

export const Price = styled.span`
  width: 67px;
  height: 31px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-align: right;

  /* Base/Text */

  color: #574f4d;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
