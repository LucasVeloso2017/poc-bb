import React, { useEffect } from 'react';

import * as S from './styles';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../../components/Header';

const PagesLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return(
    <S.Wrapper>
      <Header/>
      <S.Container>
        <Outlet/>
      </S.Container>
   </S.Wrapper>

  );
}

export default PagesLayout;