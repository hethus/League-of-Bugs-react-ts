import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteModalContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 18vh;
    border-radius: 8px;
    background-color: ${theme.colors.baseBg2};
    padding: 1.5rem;
    text-align: center;
    color: ${theme.colors.textColor};
    gap: 2rem;
    border: 1px solid ${theme.colors.primaryColor};

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;