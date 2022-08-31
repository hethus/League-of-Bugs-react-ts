import styled, { css } from "styled-components";

export const SettingsUserCardContainer = styled.div`
  ${({ theme }) => css`
    width: 19.75rem;
    height: 12.75rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      border: 2px solid ${theme.colors.primaryColor};
      color: ${theme.colors.secondaryColor};
    }

    h3 {
      margin-bottom: 1.5rem;
      text-align: center;
    }

    p {
      margin: 0.3rem 0;
      color: ${theme.colors.textLight};
    }

    span {
      margin-bottom: 1.5rem;
      color: ${theme.colors.textLight};
    }
  `}
`

export const SettingsUserDeleteCardButton = styled.div`
  ${({ theme }) => css`
    height: 2.85rem;
    width: 18.75rem;
    border-radius: 8px;
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.secondaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    border: 1px solid ${theme.colors.primaryColorOpacity};
  `}
`