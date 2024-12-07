import React from 'react';

import * as S from './styles';
import { Outlet } from 'react-router';

const PagesLayout = () => {
  return(
   <S.Container>
      <Outlet/>
   </S.Container>
  );
}

export default PagesLayout;