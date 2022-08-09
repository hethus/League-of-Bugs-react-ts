import styled, { css } from "styled-components";


export const ModalStyle = styled.div`
  ${({ theme }) => css`
  margin: 8% auto;
  background-color: ${theme.colors.baseBg1};
  width: 60%;
  height: 70%;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  `}
`;

export const ModalStyleButton = styled.button`
  ${({ theme }) => css`
    box-sizing: border-box;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0.2rem 0.3rem;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.baseForm};
    position: absolute;
    border-radius: 0 3rem 0 10rem;
    right: 19.2rem;
    z-index: 3;
    cursor: pointer;
  `}
`

export const OverlayStyle = styled.div`
${({ theme }) => css`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  `}
`;

export const ModalDisplayContainer = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

  `}
`

export const ModalBodyContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`

export const ModalContentStyle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0.8rem;
    padding: 1rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    box-sizing: border-box;

    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      width: 3px;
    };

    &::-webkit-scrollbar-track {
      box-Shadow: 0 0 6px ${theme.colors.baseBg1};
      margin: 0.4em 0;
    };
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primaryColor};
      border-Radius: 10px;
      height: 2px;
    };
  `}
`

export const ModalDescriptionContainer = styled.div`
  ${({ theme }) => css`
    width: 38rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    text-align: center;
    margin-top: 0.8rem;
    padding: 0 2rem;
    color: ${theme.colors.textColor};
    gap: 0.5rem;

    p {
      font-size: 1.3rem;
      font-weight: bold;
    }
  `}
`

export const ModalIframeStyle = styled.iframe`
  ${({ theme }) => css`
    width: 38rem;
    height: 20rem;
    border-radius: 10px;
    box-sizing: border-box;
  `}
`

export const ModalTableContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    margin: 0.8rem;
    width: 100%;
    min-width: 25%;

    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      width: 3px;
    };

    &::-webkit-scrollbar-track {
      box-Shadow: 0 0 6px ${theme.colors.baseBg1};
      margin: 0.4em 0;
    };
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primaryColor};
      border-Radius: 10px;
      height: 2px;
    };

  `}
`

export const ModalTableRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 85%;
    gap: 0.3rem;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid ${theme.colors.baseLine};
    color: ${theme.colors.textColor};
    padding-bottom: 1rem;
    margin: 1rem;
  `}
`

export const ModalImageTable = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    height: 10rem;
    border-bottom: 1px solid ${theme.colors.baseLine};
    padding: 0 0.5rem 1rem 0.5rem;
  `}
`

export const ModalDetailTable = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`

export const ModalChampionTableContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.textColor};
    margin: 0.8rem;
  `}
`

export const ModalChampionDetailClasse = styled.p`
  ${({ theme, color }) => css`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;

    ${color === "easy" && css`
        border: 1px solid ${theme.colors.primaryColorOpacity};
      `}

      ${color === "medium" && css`
        border: 1px solid yellow;
      `}

      ${color === "hard" && css`
        border: 1px solid red;
      `}

    span  {
      width: 1.2rem;
      background-color: aquamarine;
      border-radius: 10px;

      ${color === "easy" && css`
        background-color: ${theme.colors.primaryColor};
      `}

      ${color === "medium" && css`
        background-color: yellow;
      `}

      ${color === "hard" && css`
        background-color: red;
      `}
    }
  `}
`

export const ModalChampionClasseName = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.3rem;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid ${theme.colors.baseLine};
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
  `}
`

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.colors.textColor};
    margin: 0.1rem 1rem;
    font-size: 1.1rem;
  `}
`

export const ModalFooterButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.2rem 0;
  `}
`