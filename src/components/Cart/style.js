import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  align-items: center;

  margin: 0px 25px 0 25px;

  @media (min-width: 1024px) {
    max-width: 365px;
    max-height: 465px;
  }
`;

export const Content = styled.aside`
  margin: 10px auto;
  max-width: 610px;
  width: 100%;
  /* height: 100vh; */

  .cart__style {
    background-color: var(--Color-primary);
    width: 100%;
    height: 65px;

    padding: 1.4rem;

    display: flex;
    justify-content: center;

    border-radius: 5px 5px 0px 0px;

    h3 {
      width: 100%;
      color: white;
    }
  }

  .content__list {
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .cart__content--active {
    width: 100%;

    background-color: var(--Grey-0);

    border-radius: 0px 0px 5px 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .contentCart__purchase {
      width: 80%;

      /* gap: 25px; */

      padding-bottom: 20px;

      .purchase__total {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        border-top: 2px solid var(--Grey-20);
        padding: 15px;
      }

      button {
        width: 100%;
        height: 40px;

        background-color: var(--Grey-20);

        color: var(--Grey-50);

        &:hover {
          color: white;
          background-color: var(--Grey-50);
        }
      }
    }
  }

  .cart__content--inactive {
    width: 100%;
    height: 9.5vh;

    background-color: var(--Grey-0);

    display: flex;
    align-items: center;
    padding: 10px;

    h3 {
      padding: 5px;
    }
  }

  /* dentro do cart */
  @media (min-width: 768px) {
  }
`;
