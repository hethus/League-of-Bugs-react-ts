import * as Styled from './styles';
import Logo from "../../assets/logo_patterns/logo.png";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img alt="logo" src={Logo}/>
      <div>
        <HomeIcon />
        <SettingsIcon />
      </div>
      <LogoutIcon />
    </Styled.MenuContainer>
  );
};

export default Menu;