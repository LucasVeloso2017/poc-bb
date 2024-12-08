import React from 'react';
import IntegrationIcon from '../../../assets/integrations-icon.svg'
import FullscreenIcon from '../../../assets/fullscreen-icon.svg'

import * as S from './styles';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router';
import DataLayerList from './components/DataLayerList';


const IntegrationsDashboard: React.FC = () => {
   const navigate = useNavigate()

   const handleGoToFullscreen = () =>{
      navigate("/integrations/fullscreen")
   }

  return(
   <S.Container>
      <S.PageHeader>
         <div className='title'>
            <img src={IntegrationIcon} alt="integration-icon" />
            <span>Integrações</span>
         </div>
         <Button
            onClick={handleGoToFullscreen}
            withIcon={{
               icon:FullscreenIcon,
               onlyIcon:true
            }}
         />
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
         a
   </S.Container>
  );
}

export default IntegrationsDashboard;