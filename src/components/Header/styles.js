import styled from "styled-components";

export const Conteiner = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 20vh;
  width: 100vw;

  background-color: var(--Grey-0);

  .conteiner__search {
    width: 90%;
    height: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-color: white;
    border: 1px solid var(--Grey-100);
    border-radius: 8px;

    &:hover {
      border: 1px solid var(--Grey-20);
    }

    input {
      width: 80%;
      background-color: transparent;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-evenly;
    align-items: center;

    .conteiner__search {
      width: 365px;
      height: 60px;
    }
  }
`;
