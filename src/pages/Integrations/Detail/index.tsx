import * as S from "./styles";

import ChevronLeft from "../../../assets/chevron-left.png";
import ArrowsClosedIcon from "../../../assets/arrows-closed-icon.svg";
import ClockIcon from "../../../assets/clock-icon.svg";
import CheckCircleIcon from "../../../assets/check-circle-icon.svg";
import Table from "../../../components/Table";

function IntegrationsDetail() {

  const edTechColumns = [
    {
      headerCell: (
        <S.EdTechNameTableCollumn>
          <div className="table-header">
            <span>Nome</span>
          </div>
        </S.EdTechNameTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechNameTableCollumn>
          <div className="table-row">
            <span>Tarefas</span>
          </div>
        </S.EdTechNameTableCollumn>
      ),
    },
    {
      headerCell: (
        <S.EdTechStatusTableCollumn>
          <div className="table-header">
            <span>Status</span>
          </div>
        </S.EdTechStatusTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechStatusTableCollumn>
          <div className="table-row">
            <div className="green-dot"></div>
            <span>Ativado</span>
          </div>
        </S.EdTechStatusTableCollumn>
      ),
    },
  ]

  const edTechData = Array.from({ length: 4 })

  const edtechDatalogColumns = [
    {
      headerCell: (
        <S.EdTechDatalogStatusTableCollumn>
          <div className="table-header">
            <span>Status</span>
          </div>
        </S.EdTechDatalogStatusTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechDatalogStatusTableCollumn>
          <div className="table-row">
            <div className="status-ok">
              <img src={CheckCircleIcon} alt="" />
            </div>
          </div>
        </S.EdTechDatalogStatusTableCollumn>
      ),
    },
    {
      headerCell: (
        <S.EdTechDatalogDescriptionTableCollumn>
          <div className="table-header">
            <span>Descrição</span>
          </div>
        </S.EdTechDatalogDescriptionTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechDatalogDescriptionTableCollumn>
          <div className="table-row">
            <span>
              Tentativa de chamar a API
            </span>
          </div>
        </S.EdTechDatalogDescriptionTableCollumn>
      ),
    },
    {
      headerCell: (
        <S.EdTechDatalogDateStartTableCollumn>
          <div className="table-header">
            <span>Data início</span>
          </div>
        </S.EdTechDatalogDateStartTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechDatalogDateStartTableCollumn>
          <div className="table-row">
            <span>20/01/2024 - 10h00</span>
          </div>
        </S.EdTechDatalogDateStartTableCollumn>
      ),
    },
    {
      headerCell: (
        <S.EdTechDatalogDateEndTableCollumn>
          <div className="table-header">
            <span>Data término</span>
          </div>
        </S.EdTechDatalogDateEndTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechDatalogDateEndTableCollumn>
          <div className="table-row">
            <span>20/01/2024 - 10h00</span>
          </div>
        </S.EdTechDatalogDateEndTableCollumn>
      ),
    },
    {
      headerCell: (
        <S.EdTechDatalogLatencyTableCollumn>
          <div className="table-header">
            <span>Latência</span>
          </div>
        </S.EdTechDatalogLatencyTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechDatalogLatencyTableCollumn>
          <div className="table-row">
            <span>
              10s
            </span>
          </div>
        </S.EdTechDatalogLatencyTableCollumn>
      ),
    },
    {
      headerCell: (
        <S.EdTechDatalogProcessTableCollumn>
          <div className="table-header">
            <span>Quant. Obj. Processados</span>
          </div>
        </S.EdTechDatalogProcessTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechDatalogProcessTableCollumn>
          <div className="table-row">
            <span>
              1000
            </span>
          </div>
        </S.EdTechDatalogProcessTableCollumn>
      ),
    },
    {
      headerCell: (
        <S.EdTechDatalogErrorTableCollumn>
          <div className="table-header">
            <span>Erros</span>
          </div>
        </S.EdTechDatalogErrorTableCollumn>
      ),
      rowCell: () => (
        <S.EdTechDatalogErrorTableCollumn>
          <div className="table-row">
            <span>
              5
            </span>
          </div>
        </S.EdTechDatalogErrorTableCollumn>
      ),
    },
  ]

  const edTechDatalogData = Array.from({ length: 2 })


  return (
    <S.Container>
      <S.HeaderRow>
        <a href="/integrations">
          <img src={ChevronLeft} />
          Integração Plurall
        </a>
      </S.HeaderRow>
      <S.Card>
        <S.InfoDetails>
          <div className="itens-wrapper">
            <span>Tipo</span>
            <p>API - DB</p>
          </div>
          <div className="itens-wrapper">
            <span>Nome das Partes</span>
            <p>API: plurall BD: sesidn postgresql</p>
          </div>
          <div className="itens-wrapper">
            <span>Último Play</span>
            <p>20/01 - 10h00</p>
          </div>
          <div className="itens-wrapper">
            <span>Último Stop</span>
            <p>20/01 - 10h00</p>
          </div>
        </S.InfoDetails>
      </S.Card>
      <S.GrafficDataWrapper>
        <S.Card>
          <S.IntegrationsWrapper>
            <div className="header">
              <div className="title">
                <img src={ArrowsClosedIcon} alt="" />
                <h1>Últimas integrações</h1>
              </div>
              <span>Integrações diárias</span>
            </div>
            <div className="content">
              Grafico donnut
            </div>
          </S.IntegrationsWrapper>
        </S.Card>
        <S.Card>
          <S.IntegrationsWrapper>
            <div className="header">
              <div className="title">
                <img src={ArrowsClosedIcon} alt="" />
                <h1>Produtos</h1>
              </div>
              <span>Status da EdTech</span>
            </div>
            <div className="content">
              <Table columns={edTechColumns} data={edTechData} />
            </div>
          </S.IntegrationsWrapper>
        </S.Card>
      </S.GrafficDataWrapper>
      <S.Card>
        <S.TimestampMetric>
          <div className="header">
            <div className="title">
              <img src={ClockIcon} alt="" />
              <h1>Tempo médio de resposta</h1>
            </div>
          </div>
          <div className="content">
            flow-chart
          </div>
        </S.TimestampMetric>
      </S.Card>
      <br />
      <S.Card>
        <S.EdTechDatalog>
          <Table data={edTechDatalogData} columns={edtechDatalogColumns}/>
        </S.EdTechDatalog>
      </S.Card>
      <br /><br /><br />
    </S.Container>
  );
}

export default IntegrationsDetail