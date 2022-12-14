import styled, { css } from "styled-components";

export const SettingsBugPointCardContainer = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 16.75rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.textColor};
    box-sizing: border-box;
    text-align: center;

    img {
      width: 6.50rem;
      margin-top: 0.25rem;
    }

    p {
      color: ${theme.colors.textLight};
    }
  `}
`

export const SettingsBugPointCardButton = styled.div`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 100%;
    border-radius: 0 0 8px 8px;
    background-color: ${theme.colors.primaryColorOpacity};
    color: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    border: 1px solid ${theme.colors.primaryColorOpacity};
  `}
`