import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   gap: 2.4rem;

   .row{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2.2rem;
   }
`;

export const DatalayerViews = styled.div`
   flex: 1 1 auto;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   gap: 1.3rem;

   .title{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;

      span{
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #354344;
         font-weight:700;
         font-size: 1.8rem;
      }
   }

   .card{
      width: 100%;
      padding-top: 4.6rem;
      padding-left: 4.9rem;
      padding-right: 3.5rem;
      padding-bottom: 5.9rem;
      border-radius: 1rem;
      border:0.1rem solid #D2D9DA;
      background-color: #ffff;
      display: flex;
      flex-direction: column;

      h1{
         display: flex;
         align-items: center;
         gap: 0.4rem;
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #354344;
         font-weight: 700;
         font-size: 2.4rem;

         img{
            width: 2.8rem;
            height: 1.8rem;
         }
      }
      
      .datalayer{
         width: 100%;
         display: flex;
         
         div:nth-child(1){
            width: 22.6rem;
            height: 35rem;
            background-color: red;
         }

         div:nth-child(2){
            width: 100%;
            height: 35rem;
            background-color: lightblue;
         }
      }
      
   }
`
export const IntegrationsViews = styled.div`
   width: 100%;
   flex: 1 1 auto;
   padding: 2.2rem 2.4rem;
   border-radius: 1rem;
   border:0.1rem solid #D2D9DA;
   background-color: #ffff;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   gap: 5.3rem;
   overflow: hidden;

   .title{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;

      span{
         width: 10rem;
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #354344;
         font-weight:700;
         font-size: 1.8rem;
      }
   }

   .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.9rem;

      img{
         width: 5rem;
         height: 5rem;
      }
      span{
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #354344;
         font-weight:400;
         font-size: 1.4rem;
      }
   }

   .list{
      display: flex;
      align-content: flex-start;
      justify-content: center;
      gap: 8rem;
   }
`