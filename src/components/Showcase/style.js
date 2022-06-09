import styled from "styled-components";

<<<<<<< HEAD
export const Conteiner = styled.article`
  width: 100%;
=======
export const Conteiner = styled.main`
>>>>>>> feature/card
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
<<<<<<< HEAD
  width: 100%;
  display: flex;
  justify-content: center;

  ul {  
    overflow-x: auto;
    
=======
  display: flex;
  justify-content: center;

  ul {
    width: 100vw;
    overflow-x: scroll;

>>>>>>> feature/card
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
