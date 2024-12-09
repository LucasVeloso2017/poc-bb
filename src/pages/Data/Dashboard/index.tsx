import React from 'react';
import DatabaseIcon from '../../../assets/database-icon.svg'
import * as S from './styles';
import DataLayerList from './components/DataLayerList';

const DataDashboard: React.FC = () => {
   
  return(
   <S.Container>
      <S.PageHeader>
         <div className='title'>
            <img src={DatabaseIcon} alt="integration-icon" />
            <span>Normalização de Dados</span>
         </div>
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
         <DataLayerList/>
      </S.Card>
         <br />
         <br />
         <br />
   </S.Container>
  );
}

export default DataDashboard;