import styled, { css } from "styled-components";

export const PurchaseDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: 25.875rem;
    height: 100vh;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px 0 0 16px;
    padding: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `}
`

export const PurchaseDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.5rem;
    display: flex;
    padding-bottom: 2.5rem;
    flex-direction: column;
    justify-content: space-around;
    font-family: ${theme.constants.bodyFontFamily};
    line-height: ${theme.constants.lineHeight};
    font-size: ${theme.constants.headingFontSize};
    letter-spacing: 140%;
  `}
`

export const PurchaseDetailsHeaderAdmin = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.5rem;
    display: flex;
    padding-bottom: 2.5rem;
    font-family: ${theme.constants.bodyFontFamily};
    line-height: ${theme.constants.lineHeight};
    font-size: ${theme.constants.headingFontSize};
    letter-spacing: 140%;
    display: flex;
    justify-content: space-between;

    h4 {
      color: ${theme.colors.secondaryColor};
    }
  `}
`

export const CheckoutDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
      width: 3px;
    };

    &::-webkit-scrollbar-track {
      box-Shadow: 0 0 6px ${theme.colors.baseBg1};
      margin-top: 2.7rem;
    };
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primaryColor};
      border-Radius: 10px;
      height: 2px;
    };
  `}
`

export const CheckoutDetailsHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    padding: 0 0 0.8rem 0;
    box-sizing: border-box;
    margin-bottom: 0.8rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.baseLine};

    div {
      display: flex;
      justify-content: space-between;
      width: 17.5rem;
    }

    h3 {
      width: 100%;
      text-align: center;
    }
  `}
`

export const PurchaseDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: 22.375rem;
    height: 14.875rem;
    border-top: 1px solid ${theme.colors.baseLine};
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


    div {
      display: flex;
      justify-content: space-between;
    }
  `}
`

export const CheckoutCardsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const HomeDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
  `}
`

export const homeDetailsCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid ${theme.colors.baseLine};

      h3 {
        padding-left: 1rem;
      }

      p {
        padding-left: 0.9rem;
      }

      span {
        padding-right: 0.2rem;
      }
    }
  `}
`

export const homeDetailsCardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
  

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }

    div {
      width: 100%;
      height: 4rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      margin-top: 0.5rem;
      gap: 0.8rem;
      background-color: ${theme.colors.baseBg1};
      border-radius: 0.8rem 0.8rem 0 0.8rem ;
      padding: 0.8rem;
      box-sizing: border-box;
      border: 1px solid ${theme.colors.baseLine};
    }

    section {
      position: absolute;
      width: 20%;
      height: 10%;
      border-radius: 0 0 0.8rem 0.8rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      top: 78px;
      right: 0px;
    }
  `}
`