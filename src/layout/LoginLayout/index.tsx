import React from 'react';

import * as S from './styles';
import { Outlet } from 'react-router';
import { Footer } from '../../components/Footer';

const LoginLayout = () => {
  return(
   <S.Container>
      <Outlet/>
      <Footer/>
   </S.Container>
  );
}

export default LoginLayout;