import React from 'react';

import * as S from './styles';
import Input from '../../../../../components/Input';
import SearchIcon from '../../../../../assets/search-icon.svg'
import FilterIcon from '../../../../../assets/filter-icon.svg'
import PluralLogo from '../../../../../assets/plural-logo.png'
import ChevronIcon from '../../../../../assets/chevron-icon.svg'
import IntegrationsAllIcon from '../../../../../assets/integrations-all-icon.svg'
import Button from '../../../../../components/Button';
import { useNavigate } from 'react-router';
import Table from '../../../../../components/Table';


const DataLayerList: React.FC = () => {
   const navigate = useNavigate()

   const handleGoToAllIntegrations = () => {
      navigate('/integrations/all')
   }

   const handleGoToIntegrationDetail = () => {
      navigate('/integrations/detail/1')
   }

   const columns = [
      {
         headerCell: (
            <S.IntegrationNameTableColumn>
               <div className="header">
                  <span>Nome da Integração</span>
               </div>
            </S.IntegrationNameTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationNameTableColumn>
               <div className="row">
                  <img src={PluralLogo} />
                  <span>Plurall</span>
               </div>
            </S.IntegrationNameTableColumn>
         ),
      },
      {
         headerCell: (
            <S.IntegrationTypeTableColumn>
               <div className="header">
                  <span>Tipo</span>
               </div>
            </S.IntegrationTypeTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationTypeTableColumn>
               <div className="row">
                  <span>API-DB</span>
               </div>
            </S.IntegrationTypeTableColumn>
         ),
      },
      {
         headerCell: (
            <S.IntegrationOriginDestinyTableColumn>
               <div className="header">
                  <span>Origem e Destino</span>
               </div>
            </S.IntegrationOriginDestinyTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationOriginDestinyTableColumn>
               <div className="row">
                  <span>API: plurall --- BD: sesidn postgresql</span>
               </div>
            </S.IntegrationOriginDestinyTableColumn>
         ),
      },
      {
         headerCell: (
            <S.IntegrationCreatedAtTableColumn>
               <div className="header">
                  <span>Criado em</span>
               </div>
            </S.IntegrationCreatedAtTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationCreatedAtTableColumn>
               <div className="row">
                  <span>04/12/2000</span>
               </div>
            </S.IntegrationCreatedAtTableColumn>
         ),
      },
      {
         headerCell: (
            <S.IntegrationStatusTableColumn>
               <div className="header">
                  <span>Status</span>
               </div>
            </S.IntegrationStatusTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationStatusTableColumn>
               <div className="row">
                  <span>Tentativa de chamar a API</span>
               </div>
            </S.IntegrationStatusTableColumn>
         ),
      },
      {
         headerCell: (
            <S.IntegrationProcessTableColumn>
               <div className="header">
                  <span>Quant. Obj. <br/>Processados</span>
               </div>
            </S.IntegrationProcessTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationProcessTableColumn>
               <div className="row">
                  <span>3560</span>
                  <Button
                     onClick={handleGoToIntegrationDetail}
                     withIcon={{
                        icon:ChevronIcon,
                        onlyIcon:true
                     }}
                  />
               </div>
            </S.IntegrationProcessTableColumn>
         ),
      },
      
   ];

   const data = Array.from({ length: 10 })
   
   return (
      <S.Container>
         <S.FilterWrapper>
            <div className="tabs">
               <div className="item active">
                  <span>Sucesso</span>
               </div>
               <div className="item">
                  <span>Atenção</span>
               </div>
               <div className="item">
                  <span>Erro</span>
               </div>
            </div>
            <div className="filters">
               <div className="search">
                  <Input
                     placeholder='Buscar'
                     withIcon={{
                        icon: SearchIcon,
                        position: 'left'
                     }}
                  />
               </div>
               <Button
                  label='Filtro'
                  withIcon={{
                     icon: FilterIcon,
                     position: 'left'
                  }}
               />
               <Button
                  onClick={handleGoToAllIntegrations}
                  label='Ir para todas as integrações'
                  withIcon={{
                     icon: IntegrationsAllIcon,
                     position: 'left'
                  }}
               />
            </div>
         </S.FilterWrapper>
         <Table data={data} columns={columns}/>
      </S.Container>
   );
}

export default DataLayerList;