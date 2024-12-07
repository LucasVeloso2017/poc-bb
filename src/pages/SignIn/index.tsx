import { Container, Background } from "./styled";

import Logo from "../../assets/image.png";

export function SignIn() {
  return(
    <Container>
      <Background>
        <img src={Logo} alt="Logo do app" />
      </Background>
    </Container>
  );
}