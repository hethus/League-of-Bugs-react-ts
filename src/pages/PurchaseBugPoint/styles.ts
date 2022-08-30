import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #252836;
  color: #fff;

  section {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  ${({ theme }) => css`
    width: calc(100% - 32.375rem);
    overflow-y: scroll;
    padding-bottom: 5rem;

    &::-webkit-scrollbar {
      width: 3px;
    };

    &::-webkit-scrollbar-track {
      box-Shadow: 0 0 6px ${theme.colors.baseBg1};
      margin-top: 9.3rem;
    };
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primaryColor};
      border-Radius: 10px;
      height: 2px;
    };
  `}
`

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`

export const TitleContainer = styled.div`
    h1 {
      font-family: "Big Shoulders Inline Display", cursive;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    p {
      text-transform: capitalize;
      font-size: 20px;
    }
`

export const BugPointUserContainer = styled.div`
  ${({ theme }) => css`
    width: 6.5rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryColor};
    gap: 0.5rem;
    border-top: 4px solid ${theme.colors.primaryColor};
    border-bottom: 4px solid ${theme.colors.primaryColor};
    border-radius: 15px;
    box-sizing: border-box;
  `}
`

export const BugPointAdminContainer = styled.div`
  ${({ theme }) => css`
    width: 6.5rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.secondaryColor};
    gap: 0.5rem;
    border-top: 4px solid ${theme.colors.secondaryColor};
    border-bottom: 4px solid ${theme.colors.secondaryColor};
    border-radius: 15px;
    box-sizing: border-box;
    position: relative;

    .dev-bugpoint-purchase {
      font-size: x-large;
      font-weight: 700;
      position: absolute;
      top: -2.2rem;
    }
  `}
`

export const SearchInputContainer = styled.div`
  width: 173px;
  height: 48px;
  background-color: #2d303e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  gap: 10px;

  input {
    background-color: #2d303e;
    width: 120px;
    height: 38px;
    color: #ffffff;
    font-size: 14px;

    :focus {
      outline: none;
    }
  }
`

export const CategoriesNavigationBar = styled.div`
  width: 100%;
  height: 4.6vh;
  border-bottom: 1px solid #393c49;
  display: flex;
  justify-content: center;
`

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  color: #8046f2;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background-color: #252836;
  font-size: 18px;
  
  :hover {
    color: #ffffff;
  }

  ${({ active }) => active && css`
    position: relative;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2.6px;
        width: 100%;
        height: 4px;
        background-color: #6cea69;
        border-radius: 5rem;
      }
  `}
`

export const ProductsHeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  box-sizing: border-box;
`

export const NoItemContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 100%;
    color: ${theme.colors.primaryColor};
    font-size: 30px;
    font-weight: bold;
    background-color: ${theme.colors.baseBg2};
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 7px double ${theme.colors.primaryColor};
    border-right: 7px double ${theme.colors.primaryColor};
    border-left: 1px solid ${theme.colors.primaryColor};
    border-top: 1px solid ${theme.colors.primaryColor};
    border-radius: 15px;
    box-sizing: border-box;

    svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`