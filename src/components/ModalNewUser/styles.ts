import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 1.5rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 8px;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.125rem;
        width: 100%;
        margin: 0;
        padding: 0.4rem 2.25rem 0 0;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: rgba(108,234,105,0.4);
        color: #ffffff;
        box-shadow: 0px 5px 19px rgb(105 234 118 / 20%);
      }
    }
  `}
`;