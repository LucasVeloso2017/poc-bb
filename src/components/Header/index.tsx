import {
  Container,
  LogoWrapper,
  ProfileContainer,
  ProfileText,
  TabsWrapper,
  FullscreenFiltersWrapper
} from "./styles";

import CalendarLogo from "../../assets/Calendar.png";
import ProfileImg from "../../assets/Profile.png";
import GoDown from "../../assets/chevron-down.png";
import FilterIcon from '../../assets/filter-blue-icon.svg'
import SmallscreenIcon from '../../assets/smallscreen-icon.svg'
import Button from "../Button";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();

  const isIntegrationsActiveTab = window.location.pathname.includes("integrations")
  
  const isIdentityActiveTab = window.location.pathname.includes("identity")

  const isDataActiveTab = window.location.pathname.includes("data")

  const isAgentActiveTab = window.location.pathname.includes("agent")

  const isIntegrationsFullscreenActiveTab = window.location.pathname.includes("fullscreen")


  const handleGoToSmallScreen = () =>{
    navigate(-1);
  }

  return (
    <Container>
      <LogoWrapper>
        <img src={CalendarLogo} alt="logo de um calendario" />
        <h1>Hub de Integrações</h1>
      </LogoWrapper>
      {!isIntegrationsFullscreenActiveTab && (
        <>
          <TabsWrapper>
            <div className={`item ${isIntegrationsActiveTab && "active"}`}>
              <a href="#">Integração</a>
            </div>

            <div className={`item ${isIdentityActiveTab && "active"}`}>
              <a href="#">Identidade</a>
            </div>

            <div className={`item ${isDataActiveTab && "active"}`}>
              <a href="#">Dados</a>
            </div>

            <div className={`item ${isAgentActiveTab && "active"}`}>
              <a href="#">Agente</a>
            </div>
          </TabsWrapper>
          <ProfileContainer>
            <img src={ProfileImg} alt="Foto do usuário" />
            <ProfileText>
              <p>Jose de Abreu</p>
              <span>Admin</span>
            </ProfileText>
            <img className="GoDown" src={GoDown} alt="Imagem de uma seta" />
          </ProfileContainer>
        </>
      )}
      {isIntegrationsFullscreenActiveTab && (
        <FullscreenFiltersWrapper>
          <Button
            variant="brand-outlined"
            label='Filtros'
            withIcon={{
              position: 'left',
              icon: FilterIcon,
            }}
          />
          <Button
            onClick={handleGoToSmallScreen}
            withIcon={{
              icon: SmallscreenIcon,
              onlyIcon:true,
              styles:{
                width:20,
                height:20
              }
            }}
          />
        </FullscreenFiltersWrapper>
      )}
    </Container>
  );
}
