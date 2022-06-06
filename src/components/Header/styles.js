import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100vh;
  width: 80%;

  header {
    display: flex;
    flex-direction: column;
  }
`;
