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
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        margin-left: 1rem; 
      }

      h3 {
        width: 8.75rem;
        height: 1.125rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    span {
      min-width: 3.5rem;
      max-width: 3.5rem;
      padding-left: 1.25rem;
      height: 100%;
      display: flex;
      align-items: center;
      
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

export const CheckoutCardFooter = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: space-around;
    margin: 2rem 0 2rem 0;
    align-items: flex-end;

    img {
      width: 12rem;
      height: 16rem;
    }
  `}
`

export const RemoveBugPointButton = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    background-color: ${theme.colors.baseBg2};
    border: 1px solid ${theme.colors.secondaryColor};
    color: ${theme.colors.secondaryColor};
    align-content: center;
    cursor: pointer;
  `}
`