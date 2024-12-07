/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = {
   variant?:'brand'
   label?:string
   withIcon?:{
      icon:any,
      position?: 'left' | 'right'
      onlyIcon?:boolean
   }
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({variant,label,withIcon,...buttonProps}:ButtonProps) => {

   if(withIcon?.onlyIcon){
      return(
         <S.Container {...buttonProps} isBrandVariant={variant === 'brand'}>
            <img src={withIcon.icon} alt="input-icon" />
         </S.Container>
      )
   }

  return(
      <S.Container {...buttonProps} isBrandVariant={variant === 'brand'}>
         {withIcon && withIcon.position === 'left' && (
            <img src={withIcon.icon} alt="input-icon" />
         )}

         {label && (
            <span>{label}</span>
         )}

         {withIcon && withIcon.position === 'right' && (
            <img src={withIcon.icon} alt="input-icon" />
         )}
      </S.Container>
  );
}

export default Button;