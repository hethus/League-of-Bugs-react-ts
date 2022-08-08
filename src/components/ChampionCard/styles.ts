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

    img {
      width: 8rem;
      position: absolute;
      top: -3.3rem;
      border-radius: 100px;
    }

    p {
      padding-bottom: 0.5rem;
    }
  `}
`