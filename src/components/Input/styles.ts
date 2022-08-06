import styled, { css } from "styled-components";

interface StyledInputProps {
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, inputSize }) => css`
    all: unset;
    box-sizing: border-box;
    padding: 0 1rem;
    width: 18.625rem;
    height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    color: ${theme.colors.textColor};
    border-radius: 8px;

    ${inputSize === "small" && css`
    width: 10.75rem;
    `}

    ${inputSize === "large" && css`
    width: 22.375rem;
    `}
  `}
`