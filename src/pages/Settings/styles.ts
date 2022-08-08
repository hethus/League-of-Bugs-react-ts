import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
};

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${theme.colors.baseBg1};
    
  `}
`

export const SettingsNavigationContainer = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    padding: 1.5rem;
    box-sizing: border-box;
    color: ${theme.colors.textColor};
  `}
`

export const SettingsNavigationButtonList = styled.div`
  ${({ theme }) => css`
    width: 110%;
    height: calc(100% - 3.15rem);
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

export const EntitiesEditContainer = styled.div`
  ${({ theme }) => css`
    width: 90%;
    height: calc(100% - 6.25rem);
    margin-top: 4.75rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    box-sizing: border-box;
    color: ${theme.colors.textColor};
    
    h2 {
      margin: 2.125rem 0;
      margin-left: 1.5rem;
    }
  `}
`

export const EntitiesEditCategories = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid ${theme.colors.baseLine};
    padding: 0 1.5rem;
    box-sizing: border-box;
  `}
`

export const EntitiesEditCategoriesButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.textLight};
    margin-right: 1.5rem;
    cursor: pointer;

    :hover {
      color: ${theme.colors.textColor};
    }

    ${active && css`
      color: ${theme.colors.primaryColor};
      border-bottom: 3px solid ${theme.colors.primaryColor};
    `}
  `}
`

export const EntitiesEditList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 16.25em);
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
    box-sizing: border-box;
    gap: 1.8rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 3px;
    };

    &::-webkit-scrollbar-track {
      box-Shadow: 0 0 6px ${theme.colors.baseBg1};
      margin: 0.3rem 0 0.3rem 0;
    };
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primaryColor};
      border-Radius: 10px;
      height: 2px;
    };
  `}
`

export const AddEntityCard = styled.div`
  ${({ theme }) => css`
    width: 11.75rem;
    height: 16.75rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    box-sizing: border-box;
    cursor: pointer;

    h2 {
      margin: 1rem;
      font-size: 35px;
    }
  `}
`

export const ConfirmationContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 7.5rem;
    padding-left: 1.5rem;
    padding-top: 3.125rem;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    border-top: 1px solid ${theme.colors.baseLine};
  `}
`