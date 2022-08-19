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
    min-height: 3rem;
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

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    display: flex;
    color: red;
    text-align: left;
    justify-content: center;
    font-size: small;
    font-weight: bold;
    white-space: pre-line;
    margin-top: 0.5rem;
  `}
`

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;