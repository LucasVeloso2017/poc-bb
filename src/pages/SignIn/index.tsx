import { Container, Background, FormContainer } from "./styled";

import Logo from "../../assets/sesi-logo.png";

export function SignIn() {
  return(
    <Container>
      <Background>
        <img src={Logo} alt="Logo do app" />
        <FormContainer>
          {/* <h1>Faça seu login</h1> */}

          {/* <div className="input-wrapper">
            <label htmlFor="mail">E-mail / CPF</label>
            <input type="email" id="mail"/>
          </div> */}
          <div className="input-wrapper">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" />
          </div>
          <div className="buttons">
            <button className="submit">Acessar</button>
            <button className="ms-auth">Entrar com Microsoft</button>
            <a href="#">Esqueci minha senha</a>
          </div>
        </FormContainer> 
      </Background>
    </Container>
  );
}