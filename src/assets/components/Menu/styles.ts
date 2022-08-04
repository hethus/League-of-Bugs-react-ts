import styled, { css } from "styled-components";

interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

interface MenuItemButtonProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  width: 6.5rem;
  height: 100vh;
  border-radius: 0 16px 16px 0;
  background-color: #1F1D2B;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 5.5rem;
    margin: 0.5rem 0;
  }
  nav {
    width: 100%;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  height: 80px;
  width: calc(100% - 12px);
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 0 0 12px;
  background-color: #1f1d2b;

  ${({ logout }) => logout && css`
    position: absolute;
    bottom: 0;
    width: calc(6.5rem - 12px);
    border-radius: 16px;
  `}

  ${({ active }) => active && css`
    background-color: #252836;
  `}
`;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: #1f1d2b;
  border-radius: 8px;
  color: #6cea69;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  ${({ active }) => active && css`
    background-color: #6cea69;
    color: #ffffff;
  `}
`;