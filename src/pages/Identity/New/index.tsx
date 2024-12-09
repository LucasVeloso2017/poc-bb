import React from 'react';
import ChevronIcon from '../../../assets/chevron-icon.svg'
import DownloadIcon from "../../../assets/download-icon.svg";
import EyeIcon from "../../../assets/eyes-icon.svg";
import * as S from './styles';
import Button from '../../../components/Button';
import Table from '../../../components/Table';


const IdentityNewUser = () => {

   const columns = [
      {
         headerCell: (
            <S.UserIDTableColumn>
               <div className="header">
                  <span>Nº</span>
               </div>
            </S.UserIDTableColumn>
         ),
         rowCell: () =>(
            <S.UserIDTableColumn>
               <div className="row">
                  <span></span>
               </div>
            </S.UserIDTableColumn>
         ),
      },
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
                  <span></span>
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
                  <span></span>
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
                  <span></span>
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
                  <span></span>
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
                  <span></span>
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
                  <span></span>
               </div>
            </S.UserBirthdayTableColumn>
         ),
      },
   ];

   const data = Array.from({ length: 10 })

  return(
   <S.Container>
      <S.HeaderContainer>
         <div className="go-back">
            <S.HeaderRow>
               <a href="/identity">
                  <img src={ChevronIcon} />
                  Cadastro de Novos Usuários 
               </a>
            </S.HeaderRow>
            <S.HeaderRow style={{marginTop:15}}>
               <span>Realize aqui o cadastro manual de novos usuários </span>
            </S.HeaderRow>
         </div>
         <div className="controls">
            <Button
               label='Download Template'
               withIcon={{
                  icon:DownloadIcon,
                  position:'left'
               }}
            />
            <Button
               label='Visualizar a Documentação de API'
               withIcon={{
                  icon:EyeIcon,
                  position:'left'
               }}
            />
         </div>
      </S.HeaderContainer>
      
      <S.Card>
         <Table columns={columns} data={data}/>
      </S.Card>
   </S.Container>
  )
}

export default IdentityNewUser;