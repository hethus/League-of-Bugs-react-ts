import styled, { css } from "styled-components";
import { Theme } from "../../assets/types/styled-components";

interface StyledButtonProps {
  theme: Theme;
  variant?: "disabled";
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant }) => css`
    width: 110%;
    height: 1.5rem;
    border-radius: 0 0 0.8rem 0.8rem;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textDark};
    cursor: pointer;
    font-family: ${theme.constants.bodyFontFamily};
    font-size: ${theme.constants.bodyFontSize};
    padding: 0.2rem;

    ${variant === "disabled" && css`
      background-color: ${theme.colors.baseBg2};
      color: ${theme.colors.secondaryColor};
      border-bottom: 1px solid ${theme.colors.secondaryColor};
      border-top: 1px solid ${theme.colors.baseBg1};
      border-right: 1px solid ${theme.colors.secondaryColor};
      border-left: 1px solid ${theme.colors.secondaryColor};
    `}
  `}
`