import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
};

export const SettingsNavigationContainer = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 19rem;
    padding: 1.5rem;
    box-sizing: border-box;
    color: ${theme.colors.textColor};
  `}
`

export const SettingsNavigationButtonList = styled.div`
  ${({ theme }) => css`
    width: 110%;
    height: calc(100% - 3.27rem);
    background-color: ${theme.colors.baseBg2};
    margin: 1.5rem 0;
    border-radius: 8px;
    overflow: hidden;
  `}
`

export const SettingsNavigationButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 5.8rem;
    padding: 1.5rem 0;
    padding-left: 2.5rem;
    box-sizing: border-box;
    margin: 1rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: ${theme.colors.textLight};
    }

    ${active && css`
      background-color: ${theme.colors.primaryColorOpacity};
      color: ${theme.colors.primaryColor};
    `}
  `}
`

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    position: relative;

    svg {
      position: absolute;
      left: -1.4rem;
    }

    ${active && css`
      border-right: 2px solid ${theme.colors.primaryColor};
      box-sizing: border-box;
      border

      svg {
        color: ${theme.colors.primaryColor};
      }
    `}
  `}
`