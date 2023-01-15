import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;

  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const HomePresentation = styled.main`
  display: flex;

  line-heigth: 130%;

  > div {
    h1 {
      font-size: 2.6rem;
      font-weight: 800;
      color: ${(props) => props.theme.colors["base-title"]};
    }

    p {
      font-family: ${(props) => props.theme.fonts.roboto};
      font-size: 1.2rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors["base-text"]};
      margin-top: 0.8rem;
    }

    img {
      flex: 1;
    }
  }
`;

export const QualitiesServiceContainer = styled.div`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const QualitiesService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const QualitiesServiceIcon = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.2rem;

  color: ${(props) => props.theme.colors.white};
`;
