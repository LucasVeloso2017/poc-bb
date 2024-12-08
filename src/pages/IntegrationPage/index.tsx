import { PageContainer } from "./styles";

import { NewHeader } from "../../components/NewHeader";

export function IntegrationPage() {
  return(
    <>
      <NewHeader />
      <PageContainer>
        <h1>Informações Gerais</h1>

        <div className="content-wrapper">
          <label htmlFor="name">Nome da Integração</label>
          <input type="text" placeholder="Digite um nome" id="nome" />

          <div className="checkbox-group">
            <label className="checkbox-inline">
              <input type="checkbox"/>
              <span className="custom-check"></span>
              API API
            </label>
            <label className="checkbox-inline">
            <input type="checkbox"/>
            <span className="custom-check"></span>
              API Banco de Dados
            </label>
            <label className="checkbox-inline">
            <input type="checkbox"/>
            <span className="custom-check"></span>
              Banco de dados API
            </label>
          </div>

          <div className="input-date">
            <div className="input-label">
              <label htmlFor="data">Inicio da execução</label>
              <input type="text" placeholder="Digite uma data" id="data"/>
            </div>

            <div className="input-label">
              <label htmlFor="hora">Horário</label>
              <input type="text" placeholder="Digite um horário" id="hora" />
            </div>
          </div>

          <div className="only-one-input">
            <label htmlFor="hours">Intervalo de execução</label>
            <input type="text" placeholder="Digite um horário" id="hours" />
          </div>
        </div>

        <div className="dayly-check">
            <label className="checkbox-inline-dayly">
              <input type="checkbox-dayly"/>
              <span className="custom-check-dayly"></span>
              Domingo
            </label>
            <label className="checkbox-inline-dayly">
              <input type="checkbox-dayly"/>
              <span className="custom-check-dayly"></span>
              Segunda
            </label>
            <label className="checkbox-inline-dayly">
              <input type="checkbox-dayly"/>
              <span className="custom-check-dayly"></span>
              Terça
            </label>
            <label className="checkbox-inline-dayly">
              <input type="checkbox-dayly"/>
              <span className="custom-check-dayly"></span>
              Quarta
            </label>
            <label className="checkbox-inline-dayly">
              <input type="checkbox-dayly"/>
              <span className="custom-check-dayly"></span>
              Quinta
            </label>
            <label className="checkbox-inline-dayly">
              <input type="checkbox-dayly"/>
              <span className="custom-check-dayly"></span>
              Sexta
            </label>
            <label className="checkbox-inline-dayly">
              <input type="checkbox-dayly"/>
              <span className="custom-check-dayly"></span>
              Sabado
            </label>
        </div>

        <div className="buttons">
          <button className="cancel">cancelar</button>
          <button className="next">Próximo</button>
        </div>
      </PageContainer>
    </>
  );
}