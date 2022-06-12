import styled from "styled-components";

export const Conteiner = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: flex-start;

    height: 100vh;

    section {
      max-width: 700px;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;

  ul {
    width: 100vw;
    overflow-x: scroll;

    display: flex;

    align-items: center;
  }

  @media (min-width: 1024px) {
    ul {
      width: 100%;
      overflow-x: hidden;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;

      li {
        width: 29%;

        .card__img {
          width: 100%;
        }
      }
    }
  }
`;
