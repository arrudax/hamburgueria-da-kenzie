import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  padding: 0.6rem;
`;

export const Content = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .cartProducts__styleImg {
    background-color: var(--Grey-20);
    max-width: 400px;
    width: 35%;

    align-items: center;

    border-radius: 5px;

    img {
      width: 70%;
    }
  }

  .cartProducts__styleText {
    display: flex;
  }

  .cartProducts__remove {
    align-self: flex-start;
    font-weight: 500;
    font-size: 12px;

    align-self: flex-end;
  }

  button {
    background: none;
  }
`;
