import styled, { css } from "styled-components";

export const ModalRelative = styled.div`
  ${({ theme }) => css`
    position: relative;
  `}
`;

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 1.5rem;
    width: 22rem;
    height: 25.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 8px;
    border: 1px solid ${theme.colors.primaryColor};
    
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .error {
      height: 0.8rem;
      margin-top: -1rem;
      text-align: center;
    }
  `}
`;

export const DeleteButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    height: 2.85rem;
    right: 16rem;
    top: -1.5rem;
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    all: unset;
    padding: 0.8rem 1rem;
    box-sizing: border-box;
    width: 18.625rem;
    height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.textColor};
  `}
`;
