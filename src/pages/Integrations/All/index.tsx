import React from 'react';
import ChevronIcon from '../../../assets/chevron-icon.svg'
import SearchIcon from '../../../assets/search-icon.svg'
import FilterIcon from '../../../assets/filter-icon.svg'
import PlusCircleIcon from '../../../assets/plus-circle-icon.svg'
import UpdateIcon from '../../../assets/update-icon.svg'
import PluralLogo from '../../../assets/plural-logo.png'
import CheckCircleIcon from "../../../assets/check-circle-icon.svg";
import PauseIcon from "../../../assets/pause-icon.svg";
import BugIcon from "../../../assets/bug-icon.svg";
import PenIcon from "../../../assets/pen-icon.svg";
import TrashIcon from "../../../assets/trash-icon.svg";
import * as S from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Table from '../../../components/Table';


const AllIntegrations = () => {

   const columns = [
      {
         headerCell: (
           <S.IntegrationStatusTableCollumn>
             <div className="header">
               <span>Status</span>
             </div>
           </S.IntegrationStatusTableCollumn>
         ),
         rowCell: () => (
           <S.IntegrationStatusTableCollumn>
             <div className="row">
               <div className="status-ok">
                 <img src={CheckCircleIcon} alt="" />
               </div>
             </div>
           </S.IntegrationStatusTableCollumn>
         ),
       },
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
            <S.IntegrationPlayedAtTableColumn>
               <div className="header">
                  <span>Último play</span>
               </div>
            </S.IntegrationPlayedAtTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationPlayedAtTableColumn>
               <div className="row">
                  <span>04/12/2000</span>
               </div>
            </S.IntegrationPlayedAtTableColumn>
         ),
      },
      {
         headerCell: (
            <S.IntegrationStopedAtTableColumn>
               <div className="header">
                  <span>Último stop</span>
               </div>
            </S.IntegrationStopedAtTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationStopedAtTableColumn>
               <div className="row">
                  <span>04/12/2000</span>
               </div>
            </S.IntegrationStopedAtTableColumn>
         ),
      },
      {
         headerCell: (
            <S.IntegrationActionsTableColumn>
               <div className="header">
                  <span>Ações</span>
               </div>
            </S.IntegrationActionsTableColumn>
         ),
         rowCell: () =>(
            <S.IntegrationActionsTableColumn>
               <div className="row">
                  <div className="controls">
                     <Button
                        withIcon={{
                           icon:PauseIcon,
                           onlyIcon:true,
                        }}
                     />
                     <Button
                        withIcon={{
                           icon:BugIcon,
                           onlyIcon:true,
                        }}
                     />
                     <Button
                        withIcon={{
                           icon:PenIcon,
                           onlyIcon:true,
                        }}
                     />
                     <Button
                        withIcon={{
                           icon:TrashIcon,
                           onlyIcon:true,
                        }}
                     />
                  </div>
               </div>
            </S.IntegrationActionsTableColumn>
         ),
      },
      
   ];

   const data = Array.from({ length: 5 })

  return(
   <S.Container>
      <S.HeaderRow>
         <a href="/integrations">
            <img src={ChevronIcon} />
            Todas as Integrações
         </a>
      </S.HeaderRow>
      <S.HeaderRow style={{marginTop:15}}>
         <span>Visualize aqui todas as integrações realizadas</span>
      </S.HeaderRow>
      <S.FilterWrapper>
         <div className="search">
            <Input 
               id='seach-all-integrations'
               withIcon={{
                  icon:SearchIcon,
                  position:'left'
               }}
               placeholder='Buscar por tipo ou nome'
            />
         </div>
         <div className="filters">
            <Button
               label='Filtros'
               withIcon={{
                  position:'left',
                  icon:FilterIcon,
               }}
            />
            <Button
               label='Nova integração'
               withIcon={{
                  position:'left',
                  icon:PlusCircleIcon,
               }}
            />
            <Button
               variant='brand'
               label='Atualizar'
               withIcon={{
                  position:'left',
                  icon:UpdateIcon,
               }}
            />
         </div>
      </S.FilterWrapper>
      <S.Card>
         <Table columns={columns} data={data}/>
      </S.Card>
   </S.Container>
  )
}

export default AllIntegrations;