import styled from "styled-components";

export const Conteiner = styled.main`
  display: flex;
  justify-content: center;
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

  @media (min-width: 768px) {
  
  ul {
    overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }
}

`;
