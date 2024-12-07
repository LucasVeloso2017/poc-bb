import React from 'react';

import * as S from './styles';
import { Outlet } from 'react-router';
import { Header } from '../../components/Header';

const PagesLayout = () => {
  return(
    <>
      <Header/>
      <S.Container>
        <Outlet/>
      </S.Container>
   </>

  );
}

export default PagesLayout;