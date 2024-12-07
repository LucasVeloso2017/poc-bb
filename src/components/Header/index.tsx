import { Container, LogoWrapper, ProfileContainer, ProfileText, TabsWrapper } from "./styles";

import CalendarLogo from '../../assets/Calendar.png';
import ProfileImg from '../../assets/Profile.png';
import GoDown from '../../assets/chevron-down.png';
import { useMemo } from "react";

export function Header() {
  const isIntegrationsActiveTab = useMemo(() => window.location.pathname.includes('integrations'),[])
  const isIdentityActiveTab = useMemo(() => window.location.pathname.includes('identity'),[])
  const isDataActiveTab = useMemo(() => window.location.pathname.includes('data'),[])
  const isAgentActiveTab = useMemo(() => window.location.pathname.includes('agent'),[])

  
  return(
    <Container>
      <LogoWrapper>
        <img src={CalendarLogo} alt="logo de um calendario" />
        <h1>Hub de Integrações</h1>
      </LogoWrapper>
      <TabsWrapper>
        <div className={`item ${isIntegrationsActiveTab && 'active'}`}>
          <a href="#">Integração</a>
        </div>

        <div className={`item ${isIdentityActiveTab && 'active'}`}>
          <a href="#">Identidade</a>
        </div>

        <div className={`item ${isDataActiveTab && 'active'}`}>
          <a href="#">Dados</a>
        </div>

        <div className={`item ${isAgentActiveTab && 'active'}`}>
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
    </Container>
  );
}