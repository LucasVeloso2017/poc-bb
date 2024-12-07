import React from 'react';
import ChevronIcon from '../../../assets/chevron-icon.svg'
import SearchIcon from '../../../assets/search-icon.svg'
import FilterIcon from '../../../assets/filter-icon.svg'
import PlusCircleIcon from '../../../assets/plus-circle-icon.svg'
import UpdateIcon from '../../../assets/update-icon.svg'
import * as S from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';


const AllIntegrations: React.FC = () => {
  return(
   <S.Container>
      <br />
      <br />
      <S.HeaderRow>
         <a href="#">
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
   </S.Container>
  )
}

export default AllIntegrations;