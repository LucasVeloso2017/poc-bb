import { Container, LogoWrapper, ProfileContainer, ProfileText, TabsWrapper, TextHeader } from "./styles";

import CalendarLogo from '../../assets/Calendar.png';
import ProfileImg from '../../assets/Profile.png';
import GoDown from '../../assets/chevron-down.png';

export function Header() {
  return(
    <Container>
      <LogoWrapper>
        <img src={CalendarLogo} alt="logo de um calendario" />
        <TextHeader>Hub de Integrações</TextHeader>
      </LogoWrapper>
      <TabsWrapper>
        <a href="#">Integração</a>
        <a href="#">Identidade</a>
        <a href="#">Dados</a>
        <a href="#">Agente</a>
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