import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 1.5rem;
    width: 22rem;
    height: 11rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 8px;
    border: 1px solid ${theme.colors.primaryColor};
    
    div {
      width: 75%;
      display: flex;
      justify-content: space-between;
    }

    .error {
      height: 0.2rem;
      margin-top: -1rem;
    }
  `}
`;