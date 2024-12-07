import React from 'react';
import IntegrationIcon from '../../assets/integrations-icon.svg'
import FullscreenIcon from '../../assets/fullscreen-icon.svg'

import * as S from './styles';

import { Header } from '../../components/Header';

const Main: React.FC = () => {
  return(
   <S.Container>
      <Header />
      <br /><br />
      <S.PageHeader>
         <div className='title'>
            <img src={IntegrationIcon} alt="integration-icon" />
            <span>Integrações</span>
         </div>
         <button>
            <img src={FullscreenIcon} alt="integration-icon" />
         </button>
      </S.PageHeader>
      <S.Card>
         <S.DashboardWrapper>

            <S.DataView>
               <S.MapFilter>
                  <div className="title">
                     <h1>Departamentos regionais</h1>
                     <h3>Clique no estado para filtrar</h3>
                  </div>
                  <div className="map">
                     a
                  </div>
               </S.MapFilter>
            </S.DataView>

            <S.DataView>
               <S.DoughnutFilter>
                  <div className="title-wrapper">
                     <div className="title">
                        <h1>Visão Nacional</h1>
                        <h3>Número total de Integrações e quantidade de sucessos, atenções e erros</h3>
                     </div>
                  </div>
                  <div className="doughnut">
                     a
                  </div>
                  
                  
               </S.DoughnutFilter>
            </S.DataView>
         </S.DashboardWrapper>
      </S.Card>
   </S.Container>
  );
}

export default Main;