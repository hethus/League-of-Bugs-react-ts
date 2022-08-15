import styled, { css } from "styled-components";
import { Theme } from "../../assets/types/styled-components";

interface ChampionCardProps {
  theme: Theme;
}

export const CardContainer = styled.div<ChampionCardProps>`
  ${({ theme }) => css`
    width: 12rem;
    height: 15.625rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.constants.bodyFontFamily};
    
    img {
      width: 8rem;
      margin: 0.25rem 0 0.75rem 0;
      border-radius: 8px;
    }

    p {
      padding-top: 0.2rem;
    }
  `}
`