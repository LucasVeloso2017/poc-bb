import { BoxTable, BoxWrapper, Container, Display, GraphicDisplay, TextLink, TimeGraphic } from "./styles";

import { Header } from "../../components/Header";
import GoLeft from "../../assets/chevron-left.png";
import Arrows from "../../assets/arrows.svg";
import Clock from "../../assets/clock.svg";

export function StatisticalGraphs() {
  return(
    <Container>
      <Header />
      <TextLink>
        <img src={GoLeft} alt="Seta para a esquerda" />
        <h1>Integração Plurall</h1>
      </TextLink>
      <Display>
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
      </Display>
      <BoxWrapper>
        <GraphicDisplay>
          <div className="text-and-icon">
            <img src={Arrows} alt="Setas em formato de icone" />
            <h1>Últimas integrações</h1>
          </div>
          <p>Integrações diárias</p>
        </GraphicDisplay>
        <GraphicDisplay>
          <div className="text-and-icon">
            <img src={Arrows} alt="setas em formato de icone" />
            <h1>Produtos</h1>
          </div>
          <p>Status da EdTech</p>
        </GraphicDisplay>
      </BoxWrapper>
      <TimeGraphic>
        <div className="text-and-icon">
          <img src={Clock} alt="Icone de um relogio" />
          <h1>Tempo médio de resposta</h1>
        </div>
      </TimeGraphic>
      <BoxTable>
        
      </BoxTable>
    </Container>
  );
}