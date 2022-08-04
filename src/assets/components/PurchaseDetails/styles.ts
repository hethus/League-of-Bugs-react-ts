import styled, { css } from "styled-components";

export const PurchaseDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: 25.875rem;
    height: 100vh;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px 0 0 16px;
    padding: 1.5rem;
  `}
`

export const PurchaseDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: ${theme.constants.bodyFontFamily};
    line-height: ${theme.constants.lineHeight};
    font-size: ${theme.constants.headingFontSize};
    letter-spacing: 140%;
  `}
`