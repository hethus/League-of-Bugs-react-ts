import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface ChampionCardProps {
  theme: Theme;
}

export const CardContainer = styled.div<ChampionCardProps>`
  ${({ theme }) => css`
    width: 12rem;
    height: 14.125rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.constants.bodyFontFamily};
    
    img {
      width: 8rem;
      margin: 0.25rem 0 0.75rem 0;
    }
  `}
`