import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 20vh;
  width: 100vw;

  background-color: var(--Grey-0);

  .conteiner__search {
    max-width: 400px;
    width: 90%;
    height: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-color: white;
    border: 1px solid var(--Grey-100);
    border-radius: 8px;

    padding: 0 0.6rem 0 1rem;

    button {
      background-color: var(--Color-primary);

      width: 107px;

      height: 40px;

      color: white;
      &:hover {
        background-color: var(--Color-primary-50);
      }
    }

    &:hover {
      border: 1px solid var(--Grey-20);
    }

    input {
      width: 80%;

      background-color: transparent;
      border: none;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16px;

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
    justify-content: space-around;
    align-items: center;

    .conteiner__search {
      width: 365px;
      height: 60px;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-around;

    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;
