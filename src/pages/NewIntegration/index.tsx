import { PageContainer } from "./styles";

import { NewHeader } from "../../components/NewHeader";

export function NewIntegration() {
  return(
    <>
      <NewHeader />
      <PageContainer>
        <h1>Destino (Cadastro Banco de Dados)</h1>

        <div className="input-wrapper">
          <label htmlFor="name">Step Name</label>
          <input type="text" placeholder="Digite um nome" id="name" />

          <label htmlFor="url">Operation</label>
          <input type="text" placeholder="Digite um nome" id="url" />

          <label htmlFor="hour">Account</label>
          <input type="text" placeholder="Digite um horário" id="hour" />

          <label htmlFor="time">Database URL</label>
          <input type="text" placeholder="Digite um horário" id="time" />

          <label htmlFor="hora">AQL Statement</label>
          <input type="text" placeholder="Digite um horário" id="hora" />
        </div>

        <div className="buttons">
          <button className="cancel">cancelar</button>
          <button className="next">Próximo</button>
        </div>
      </PageContainer>
    </>
  );
}