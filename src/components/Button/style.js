import styled from "styled-components";

export const Conteiner = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  background-color: var(--Color-primary);

  width: 107px;
  height: 40px;

  color: white;

  &:hover {
  background-color: var(--Color-primary-50);

  }
`;
