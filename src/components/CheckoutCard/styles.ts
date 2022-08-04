import styled, { css } from "styled-components";

export const CheckoutCardContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6.625rem;
    display: flex;
    flex-direction: column;   
  `}
`

export const CheckoutCardHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    display: flex;

    div {
      width: 100%;
      height: 100%;
      line-height: 140%;
    }
  `}
`

export const CheckoutCardImg = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    img {
      width: 12rem;
      height: 16rem;
    }
  `}
`

export const BugPointsQuantityInput = styled.input`
  ${({ theme }) => css`
    all: unset;
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    color: ${theme.colors.textColor};
    border-radius: 8px;
    text-align: center;
  `}
`