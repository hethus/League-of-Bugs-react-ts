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
    width: 12rem;
    height: 19rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
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
      border: 2px dashed ${theme.colors.primaryColor};
      color: ${theme.colors.secondaryColor};
    }

    h2 {
      margin: 1rem;
      font-size: 35px;
    }
  `}
`

export const EntityCard = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    height: 19rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;

    h2 {
      margin: 0.2rem;
      font-size: 30px;
    }

    div {
      display: flex;
      width: 101%;
    }

    img {
      width: 60%;
      height: 50%;
    }

    p {
      width: 50%;
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    &:hover {
      transform: scale(1.05);
      border: 2px solid ${theme.colors.primaryColor};

      h2 {
        color: ${theme.colors.secondaryColor};
      }
    }
  `}
`

export const SettingsBugpointEditCardButton = styled.div`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0 0 8px 0px;
    background-color: ${theme.colors.primaryColorOpacity};
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    border: 1px solid ${theme.colors.primaryColorOpacity};
  `}
`

export const SettingsBugpointDeleteCardButton = styled.div`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 50%;
    border-radius: 0 0 0px 8px;
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