import { useNavigate } from "react-router-dom";
import { DashboardIcon, InfoIcon, MarketIcon, PromotionIcon } from "../../assets/icons";
import * as Styled from "./styles";

interface SettingsMenuProps {
  path: "users" | "bugpoints" | "champions" | "classes";
}

const SettingsMenu = ({ path }: SettingsMenuProps) => {
  const navigate = useNavigate()

  return (
    <Styled.SettingsNavigationContainer>
    <h2>Settings</h2>
    <Styled.SettingsNavigationButtonList className="Settings-navigation-buttons">
      <Styled.SettingsNavigationButtonContainer
        active={path === "users"}
        onClick={() => navigate("/settings/users")}
      >
        <Styled.SettingsNavigationButtonSelected
          active={path === "users"}
        >
          <InfoIcon />
          <h2>Customize your users</h2>
          <p>Manage system access</p>
        </Styled.SettingsNavigationButtonSelected>
      </Styled.SettingsNavigationButtonContainer>
      <Styled.SettingsNavigationButtonContainer
        active={path === "bugpoints"}
        onClick={() => navigate("/settings/bugpoints")}  
      >
        <Styled.SettingsNavigationButtonSelected
          active={path === "bugpoints"}
        >
          <MarketIcon />
          <h2>Customize the Bug Points</h2>
          <p>Edit and add new values</p>
        </Styled.SettingsNavigationButtonSelected>
      </Styled.SettingsNavigationButtonContainer>
      <Styled.SettingsNavigationButtonContainer
        active={path === "champions"}
        onClick={() => navigate("/settings/champions")}  
      >
        <Styled.SettingsNavigationButtonSelected
          active={path === "champions"}
        >
          <PromotionIcon />
          <h2>Customize the champions</h2>
          <p>edit and add new champions</p>
        </Styled.SettingsNavigationButtonSelected>
      </Styled.SettingsNavigationButtonContainer>
      <Styled.SettingsNavigationButtonContainer
        active={path === "classes"}
        onClick={() => navigate("/settings/classes")}
      >
        <Styled.SettingsNavigationButtonSelected
          active={path === "classes"}
        >
          <DashboardIcon />
          <h2>Modify the Champions Classes</h2>
          <p>edit and add new classes</p>
        </Styled.SettingsNavigationButtonSelected>
      </Styled.SettingsNavigationButtonContainer>
    </Styled.SettingsNavigationButtonList>
  </Styled.SettingsNavigationContainer>
  );
}

export default SettingsMenu;