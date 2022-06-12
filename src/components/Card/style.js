import styled from "styled-components";

export const Content = styled.li`
  max-width: 300px;
  max-height: 346px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  border: 2px solid var(--Gray-100);
  border-radius: 5px;

  margin: 25px 0 0 25px;

  .card__img {
    width: 295px;
    height: 150px;
    border-radius: 5px 5px;

    background-color: var(--Grey-0);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .card__content {
    display: flex;

    gap: 20px;
    padding: 20px;

    span {
      color: var(--Color-primary);
    }

    @media (min-width: 1024px) {

    }
  }
`;
