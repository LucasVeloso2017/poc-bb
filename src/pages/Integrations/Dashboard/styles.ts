import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
`;

export const PageHeader = styled.div`
   width: 100%;
   margin-bottom: 1.6rem;
   display: flex;
   align-items: center;
   justify-content: space-between;

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


   button{
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.4rem;
      border:0.1rem solid #D2D9DA;
      background-color: #FFF;
      cursor: pointer;
   }
`

export const Card = styled.div`
   width: 100%;
   border-radius: 1rem;
   border:0.1rem solid #D2D9DA;
   background-color: #ffff;
`

export const DashboardWrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 3.1rem;
   padding-top: 1.9rem;
   padding-left: 1.8rem;
   padding-right: 1.8rem;
`
export const DataView = styled.div`
   width: 50%;
   height: 54.4rem;
`
export const MapFilter = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap:5.3rem;

   .title-wrapper{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
   }

   .title{
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap:0.3rem;

      h1,h3{
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #354344;
      }
      h1{
         font-weight: 700;
         font-size: 1.8rem;
      }
      h3{
         font-weight: 400;
         font-size: 1.4rem;
      }
   }

   .map{
      width: 47.9rem;
      height: 44.5rem;
      margin-left: 12rem;
      background-color: red;
   }

`
export const DoughnutFilter = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   gap: 8.5rem;

   .title{
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap:0.3rem;

      h1,h3{
         font-family: "Noto Sans", sans-serif;
         font-style: normal;
         color: #354344;
      }

      h1{
         font-weight: 700;
         font-size: 1.8rem;
      }

      h3{
         width: 19rem;
         font-weight: 400;
         font-size: 1.4rem;
      }
   }

   .doughnut{
      width: 50rem;
      height: 24.8rem;
      background-color: red;
   }
`