import * as Styled from './styles';
import logo from '../../assets/logo_patterns/logo.png';
import { HomeIcon, SettingsIcon, LogoutIcon, PurchaseBugPoint, PurchaseChampion } from '../../assets/icons/index';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/auth';

interface MenuProps {
  path: "home" | "settings" | "purchaseBugPoint" | "purchaseChampion";
  setStepsIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ path, setStepsIsOpen }: MenuProps) => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleStepsIsOpen= () => {
    setStepsIsOpen(true);
  }

  return (
    <Styled.MenuContainer className='menu'>
      <img alt="logo" src={logo}/>
      <nav>
        <Styled.MenuItem onClick={() => navigate("/")} active={path === "home"}>
          <Styled.MenuItemButton active={path === "home"} className='home'>
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "purchaseBugPoint"} className='purchaseBugpoint'>
          <Styled.MenuItemButton onClick={() => navigate("/purchase/bugpoint")} active={path === "purchaseBugPoint"}>
            <PurchaseBugPoint />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "purchaseChampion"} className='purchaseChampion'>
          <Styled.MenuItemButton onClick={() => navigate("/purchase/champion")} active={path === "purchaseChampion"}>
            <PurchaseChampion />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"} className='settings'>
          <Styled.MenuItemButton onClick={() => navigate("/settings/users")} active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
      </nav>
      <Styled.StepsMenuItem title='Each page has its help button, click on it for more information'>
        <Styled.StepsMenuItemButton onClick={handleStepsIsOpen} >
          <p>{">Help<"}</p>
          </Styled.StepsMenuItemButton>
      </Styled.StepsMenuItem>
      <Styled.MenuItem logout className='logout'>
        <Styled.MenuItemButton onClick={() => {
            logout();
            toast.success("Logout successful!");
          }}>
          <LogoutIcon />
        </Styled.MenuItemButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
