import styled, { css } from "styled-components";


export const ModalStyle = styled.div`
  ${({ theme }) => css`
  margin: 8% auto; /* 15% from the top and centered */
  background-color: ${theme.colors.baseBg1};
  width: 60%; /* Could be more or less, depending on screen size */
  height: 70%;
  border-radius: 8px;
  box-sizing: border-box;
  box-sizing: border-box;
  display: flex;

  button {
    box-sizing: border-box;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.3rem;
    height: 100%;
    background-color: ${theme.colors.primaryColor};
    border-right: 2px solid ${theme.colors.primaryColor};
    color: ${theme.colors.baseForm};
  }
  `}
`;

export const OverlayStyle = styled.div`
${({ theme }) => css`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  `}
`;

export const ModalContentStyle = styled.div`
${({ theme }) => css`
width: 100%;
    border: 2px solid ${theme.colors.primaryColor};
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      width: 3px;
    };

    &::-webkit-scrollbar-track {
      box-Shadow: 0 0 6px ${theme.colors.baseBg1};
      margin-top: 2rem;
    };
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primaryColor};
      border-Radius: 10px;
      height: 2px;
    };
  `}
`

export const ModalIframeStyle = styled.iframe`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;
    border-radius: 10px;
    box-sizing: border-box;
  `}
`