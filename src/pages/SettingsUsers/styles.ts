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
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2.5px;
        width: 100%;
        height: 4px;
        background-color: #6cea69;
        border-radius: 5rem;
      }
    `}
  `}
`

export const EntitiesEditList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 7.25em);
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

export const EntityCard = styled.div`
  ${({ theme }) => css`
    width: 19.75rem;
    height: 12.75rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondaryColor};
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      border: 2px dashed ${theme.colors.secondaryColor};
      color: ${theme.colors.primaryColor};
    }

    h3 {
      margin-bottom: 3.5rem;
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