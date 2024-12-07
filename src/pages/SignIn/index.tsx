import { Container, Background, FormContainer, Title } from "./styled";

import { Footer } from "../../components/Footer";

import Logo from "../../assets/image.png";

export function SignIn() {
  return(
    <Container>
      <Background>
        <img src={Logo} alt="Logo do app" />

        <FormContainer>
          <div>
            <Title>Faça seu login</Title>

            <label>
              E-mail/CPF
              <input type="text" />
            </label>

            <label>
              Senha
              <input type="password" />
            </label>

            <div className="buttons">
              <button className="first">Acessar</button>
              <button className="second">Entrar com Microsoft</button>
            </div>
            <a href="#">Esqueci minha senha</a>
          </div>
        </FormContainer>
      </Background>
      <Footer />
    </Container>
  );
}