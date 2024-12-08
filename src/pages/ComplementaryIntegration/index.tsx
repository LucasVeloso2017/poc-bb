import { PageContainer } from "./styles";

import { NewHeader } from "../../components/NewHeader";

export function ComplementaryIntegration() {
  return(
    <>
      <NewHeader />
      <PageContainer>
        <h1>Origem (cadastro de API)</h1>

        <div className="input-wrapper">
          <label htmlFor="name">Step Name</label>
          <input type="text" placeholder="Digite um nome" id="name" />

          <label htmlFor="url">URL</label>
          <input type="text" placeholder="Digite um nome" id="url" />

          <label htmlFor="hour">Content-Type</label>
          <input type="text" placeholder="Digite um horário" id="hour" />

          <label htmlFor="time">Verb</label>
          <input type="text" placeholder="Digite um horário" id="time" />

          <label htmlFor="hora">Accout</label>
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