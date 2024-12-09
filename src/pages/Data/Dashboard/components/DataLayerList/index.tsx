import React from 'react';

import * as S from './styles';
import Input from '../../../../../components/Input';
import SearchIcon from '../../../../../assets/search-icon.svg'
import FilterIcon from '../../../../../assets/filter-icon.svg'
import PlurallLogo from '../../../../../assets/plural-logo.png'
import DataDividerIcon from '../../../../../assets/data-divider-icon.svg'
import DataErrorBg from '../../../../../assets/data-error-bg.svg'
import EyeIcon from '../../../../../assets/eyes-icon.svg'
import Button from '../../../../../components/Button';
import Table from '../../../../../components/Table';

const DataLayerList: React.FC = () => {

   const columns = [
      {
         headerCell: (
            <S.EdtechNameTableColumn>
               <div className="header">
                  <span>Edtech</span>
               </div>
            </S.EdtechNameTableColumn>
         ),
         rowCell: () =>(
            <S.EdtechNameTableColumn>
               <div className="row">
                  <div className="data-wrapper">
                     <img src={PlurallLogo} alt="" />
                     <div className="title">
                        <h1>Plurall</h1>
                        <span>11/11/2024</span>
                     </div>
                  </div>
                  <img src={DataDividerIcon} alt="" />
               </div>
            </S.EdtechNameTableColumn>
         ),
      },
      {
         headerCell: (
            <S.EdtechRequestTableColumn>
               <div className="header">
                  <span>Requisição</span>
               </div>
            </S.EdtechRequestTableColumn>
         ),
         rowCell: () =>(
            <S.EdtechRequestTableColumn>
               <div className="row">
                  <div className="data-wrapper">
                     <h1>Tarefas</h1>
                     <span>300 Registros</span>
                  </div>
                  <img src={DataDividerIcon} alt="" />
               </div>
            </S.EdtechRequestTableColumn>
         ),
      },
      {
         headerCell: (
            <S.EdtechLineageTableColumn>
               <div className="header">
                  <span>Linhagem</span>
               </div>
            </S.EdtechLineageTableColumn>
         ),
         rowCell: () =>(
            <S.EdtechLineageTableColumn>
               <div className="row">
                  <div className="data-wrapper">
                     <h1>Erro de requisição</h1>
                     <span>300 Registros</span>
                  </div>
                  <div className="divider-wrapper">
                     <div className="error-bg">
                        <img src={DataErrorBg} alt="" />
                     </div>
                     <img src={DataDividerIcon} alt="" />
                  </div>
               </div>
            </S.EdtechLineageTableColumn>
         ),
      },
      {
         headerCell: (
            <S.EdtechThreatedDataTableColumn>
               <div className="header">
                  <span>Inserção de dados tratados</span>
               </div>
            </S.EdtechThreatedDataTableColumn>
         ),
         rowCell: () =>(
            <S.EdtechThreatedDataTableColumn>
               <div className="row">
                  <div className="data-wrapper">
                     <h1>Tarefas</h1>
                     <span>300 Registros</span>
                  </div>
                  <img src={DataDividerIcon} alt="" />
               </div>
            </S.EdtechThreatedDataTableColumn>
         ),
      },
      {
         headerCell: (
            <S.EdtechDetailsTableColumn>
               <div className="header">
                  <span>Detalhes</span>
               </div>
            </S.EdtechDetailsTableColumn>
         ),
         rowCell: () =>(
            <S.EdtechDetailsTableColumn>
               <div className="row">
                  <Button
                     label='Log'
                     withIcon={{
                        icon:EyeIcon,
                        position:'left'
                     }}
                  />
               </div>
            </S.EdtechDetailsTableColumn>
         ),
      },
   ]

   const data = Array.from({ length: 3 })

   return (
      <S.Container>
         <S.FilterWrapper>
            <div className="tabs">
               <div className="item active">
                  <span>Sucesso</span>
               </div>
               <div className="item">
                  <span>Erros</span>
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
            </div>
         </S.FilterWrapper>
         <Table columns={columns} data={data} configurations={{
            noRowPadding:true,
            noStriped:true,
            rowBackgroundColor:'#f0f5f6',
            breakLineEachRow:true
         }}/>

      </S.Container>
   );
}

export default DataLayerList;