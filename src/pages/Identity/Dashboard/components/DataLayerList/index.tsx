import React from 'react';

import * as S from './styles';
import Input from '../../../../../components/Input';
import SearchIcon from '../../../../../assets/search-icon.svg'
import FilterIcon from '../../../../../assets/filter-icon.svg'
import PlusCircleIcon from '../../../../../assets/plus-circle-icon.svg'
import Button from '../../../../../components/Button';
import Table from '../../../../../components/Table';
import { useNavigate } from 'react-router';


const DataLayerList: React.FC = () => {

   const navigate = useNavigate()

   const columns = [
      {
         headerCell: (
            <S.UserNameTableColumn>
               <div className="header">
                  <span>Nome do usuário</span>
               </div>
            </S.UserNameTableColumn>
         ),
         rowCell: () =>(
            <S.UserNameTableColumn>
               <div className="row">
                  <span>Pedro Henrique Lucio</span>
               </div>
            </S.UserNameTableColumn>
         ),
      },
      {
         headerCell: (
            <S.UserRegionTableColumn>
               <div className="header">
                  <span>Regional</span>
               </div>
            </S.UserRegionTableColumn>
         ),
         rowCell: () =>(
            <S.UserRegionTableColumn>
               <div className="row">
                  <span>SESI-PR</span>
               </div>
            </S.UserRegionTableColumn>
         ),
      },
      {
         headerCell: (
            <S.UserSecretaryTableColumn>
               <div className="header">
                  <span>Secretaria</span>
               </div>
            </S.UserSecretaryTableColumn>
         ),
         rowCell: () =>(
            <S.UserSecretaryTableColumn>
               <div className="row">
                  <span>Curitiba - Celso Charuri</span>
               </div>
            </S.UserSecretaryTableColumn>
         ),
      },
      {
         headerCell: (
            <S.UserEmailTableColumn>
               <div className="header">
                  <span>E-mail</span>
               </div>
            </S.UserEmailTableColumn>
         ),
         rowCell: () =>(
            <S.UserEmailTableColumn>
               <div className="row">
                  <span>pedrohenrique@hotmail.com</span>
               </div>
            </S.UserEmailTableColumn>
         ),
      },
      {
         headerCell: (
            <S.UserPhoneTableColumn>
               <div className="header">
                  <span>Telefone</span>
               </div>
            </S.UserPhoneTableColumn>
         ),
         rowCell: () =>(
            <S.UserPhoneTableColumn>
               <div className="row">
                  <span>41 9999 9999</span>
               </div>
            </S.UserPhoneTableColumn>
         ),
      },
      {
         headerCell: (
            <S.UserBirthdayTableColumn>
               <div className="header">
                  <span>Data de nascimento</span>
               </div>
            </S.UserBirthdayTableColumn>
         ),
         rowCell: () =>(
            <S.UserBirthdayTableColumn>
               <div className="row">
                  <span>10/12/1992</span>
               </div>
            </S.UserBirthdayTableColumn>
         ),
      },
      {
         headerCell: (
            <S.UserStatusTableColumn>
               <div className="header">
                  <span>Status</span>
               </div>
            </S.UserStatusTableColumn>
         ),
         rowCell: () =>(
            <S.UserStatusTableColumn>
               <div className="row">
                  <div className="blue-dot"></div>
                  <span>Sucesso</span>
               </div>
            </S.UserStatusTableColumn>
         ),
      },
   ];

   const data = Array.from({ length: 10 })


   const handleGoToAddNewUser = () => navigate('/identity/user/new')
   
   return (
      <S.Container>
         <S.FilterWrapper>
            <div className="tabs">
               <div className="item active">
                  <span>Cadastrados</span>
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
               <Button
                  onClick={handleGoToAddNewUser}
                  label='Cadastrar Novos Usuários '
                  withIcon={{
                     icon: PlusCircleIcon,
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