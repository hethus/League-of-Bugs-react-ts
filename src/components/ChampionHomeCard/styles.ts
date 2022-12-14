import styled, { css } from "styled-components";
import { Theme } from "../../assets/types/styled-components";

interface ChampionCardProps {
  theme: Theme;
}

export const CardContainer = styled.div<ChampionCardProps>`
  ${({ theme }) => css`
    width: 12rem;
    height: 15.8rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.constants.bodyFontFamily};
    position: relative;
    text-align: center;
    justify-content: center;
    padding-top: 5rem;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;

    img {
      width: 8rem;
      position: absolute;
      top: -3.3rem;
      border-radius: 100px;
    }

    p {
      padding: 0 0.4rem;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 2; 
      -webkit-box-orient: vertical;
    }

    &:hover {
      transform: scale(1.05);
      border: 2px solid ${theme.colors.primaryColor};
      transition: all 0.3s ease-in-out;

      h3 {
        color: ${theme.colors.secondaryColor};
      }
    }
  `}
`

export const ChampionDetailClasse = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    width: 6rem;
    padding: 0.4rem 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
    border-radius: 50px;

    span  {
      width: 1.2rem;
      background-color: aquamarine;
      border-radius: 10px;

      ${color === "easy" && css`
        background-color: ${theme.colors.primaryColor};
      `}

      ${color === "medium" && css`
        background-color: yellow;
      `}

      ${color === "hard" && css`
        background-color: red;
      `}
    }

    ${color === "easy" && css`
        border: 1px solid ${theme.colors.primaryColor};
    `}

    ${color === "medium" && css`
      border: 1px solid yellow;
    `}

    ${color === "hard" && css`
      border: 1px solid red;
    `}
  `}
`