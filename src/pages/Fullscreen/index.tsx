import React from 'react';

import * as S from './styles';
import IntegrationIcon from '../../assets/integrations-icon.svg'
import IdentityIcon from '../../assets/identity-icon.svg'
import EdtechIcon from '../../assets/edtech-icon.svg'
import BrazilFlag from '../../assets/brazil-flag.svg'
import PluralLogo from '../../assets/plural-logo.png'


const Fullscreen: React.FC = () => {
   const fakeArr = Array.from({ length: 10 })
  return(
   <S.Container>
      <div className="row">
         <S.DatalayerViews>
            <div className='title'>
               <img src={IntegrationIcon} alt="integration-icon" />
               <span>Integrações</span>
            </div>
            <div className="card">
               <h1> 
                  <img src={BrazilFlag} alt="brazil-flag" />
                  Visão nacional
               </h1>
               <div className="datalayer">
                  <div>a</div>
                  <div>b</div>
               </div>
            </div>
         </S.DatalayerViews>
         <S.DatalayerViews>
            <div className='title'>
               <img src={IdentityIcon} alt="identity-icon" />
               <span>Identidade</span>
            </div>
            <div className="card">
               <h1>
                  <img src={BrazilFlag} alt="brazil-flag" />
                  Visão nacional
               </h1>
               <div className="datalayer">
                  <div>a</div>
                  <div>b</div>
               </div>
            </div>
         </S.DatalayerViews>
      </div>
      <S.IntegrationsViews>
         <div className="title">
            <img src={EdtechIcon} alt="integration-icon" />
            <span>Integração de Edtechs</span>
         </div>
         <div className="list">
            {fakeArr.map((_,idx) =>(
               <div className="item" key={idx}>
                  <img src={PluralLogo} alt="" />
                  <span>Plurall</span>
               </div>
            ))}
         </div>
      </S.IntegrationsViews>
   </S.Container>
  );
}

export default Fullscreen;