import styled, { css } from 'styled-components';

type ContainerProps ={
   isBrandVariant?:boolean
   isBrandOutlinedVariant?:boolean
}

export const Container = styled.button<ContainerProps>`
   padding: 0.95rem 1.2rem;
   background-color: #FFF;
   border-radius: 0.4rem;
   border:0.1rem solid #D2D9DA;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.8rem;
   cursor: pointer;

   img{
      width: 1.6rem;
      height: 1.6rem;
   }

   span{
      font-family: "Noto Sans", sans-serif;
      font-style: normal;
      color: #354344;
      font-weight:600;
      font-size: 1.4rem;
   }

   ${({isBrandVariant}) => isBrandVariant && css`
      border: none;
      background-color: #00AEBA;

      span{
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #FFF;
         font-weight:600;
         font-size: 1.4rem;
      }
   `}

   ${({isBrandOutlinedVariant}) => isBrandOutlinedVariant && css`
      border: none;
      background-color: #FFF;
      border:0.1rem solid #00AEBA;

      span{
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #00AEBA;
         font-weight:600;
         font-size: 1.4rem;
      }

   `}
`; 
