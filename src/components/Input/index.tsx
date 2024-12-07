/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

type InputProps = {
   id?:string
   withIcon?:{
      icon:any,
      position: 'left' | 'right'
   }
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({id,withIcon,...inputProps}:InputProps) => {
  return(
   <S.Container>
      {withIcon && withIcon.position === 'left' && (
         <label htmlFor={id}>
            <img src={withIcon.icon} alt="input-icon" />
         </label>
      )}

      <input id={id} type="text" {...inputProps} />

      {withIcon && withIcon.position === 'right' && (
         <label htmlFor={id}>
            <img src={withIcon.icon} alt="input-icon" />
         </label>
      )}
   </S.Container>
  );
}

export default Input;