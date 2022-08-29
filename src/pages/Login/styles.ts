import styled, { css } from "styled-components";
import backgroundPattern from "../../assets/logo_patterns/pattern2.jpg";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundPattern});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
  `}
`

export const LoginFormContainer = styled.form`
  ${({ theme }) => css`
    width: 23rem;
    height: 28.575rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    box-shadow: 3px 3px 6px 3px rgba(108, 234, 105, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    box-sizing: border-box;

    span {
      padding-top: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 100%;
        margin: 0;
        padding: 0.4rem 2.25rem 0 0;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: rgba(108,234,105,0.4);
        color: #ffffff;
        box-shadow: 0px 5px 19px rgb(105 234 118 / 20%);
      }
    }
  `}
`

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-around;
    margin-left: 1.25rem;
    padding: 0 1rem;
    box-sizing: border-box;

    h1 {
      width: 11rem;
      height: 8.3rem;
      text-transform: uppercase;
      font-family: ${theme.constants.logoFontFamily};
      color: ${theme.colors.textColor};
      font-size: 55px;
      text-align: center;
      border-top: 5px double ${theme.colors.textColor};
      border-bottom: 5px double ${theme.colors.textColor};
    }

    img {
      width: 9rem;
      height: 9rem;
    }
  `}
`

export const ButtonRegisterContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0.8rem;
    right: 23rem;
    width: 13rem;
    background-color: ${theme.colors.baseBg1};
    display: flex;
    height: 8rem;
    justify-content: center;
    align-items: center;
    border-radius: 50px 0 0 50px;
    border: 1px solid ${theme.colors.secondaryColor};
    box-sizing: border-box;
    border-right: 1px solid #3b3752;

    button {
      
      width: 8rem;
    height: 3rem;
    border-radius: 8px;
    cursor: pointer;
    font-family: ${theme.constants.bodyFontFamily};
    font-weight: 900;
    font-size: ${theme.constants.bodyFontSize};
    background-color: ${theme.colors.baseBg2};
      color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.secondaryColor};
    }

  `}
`