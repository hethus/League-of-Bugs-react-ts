import styled, { css } from "styled-components";

export const ModalChampionCardContainer = styled.div`
  ${({ theme }) => css`
    content {
      top: 50%;
      left: 50%;
      right: auto;
      background-color: red;
    }
  `}
`;

export const ModalStyle = styled.div`
  ${({ theme }) => css`
  position: fixed;
  top: 30%;
  left: 45%;
  padding: 5rem;
  right: auto;
  bottom: auto;
  background-color: ${theme.colors.baseBg2};
  z-index: 1;
  `}
`;

export const OverlayStyle = styled.div`
${({ theme }) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  `}
`;