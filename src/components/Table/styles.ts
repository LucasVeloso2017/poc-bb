import styled from 'styled-components';

export const TableWrapper = styled.table`
   width: 100%;
   border-collapse: collapse;

   tbody{
      tr{
         &:nth-child(odd) {
            background-color: #ffffff;
         }

         &:nth-child(even) {
            background-color: #F0F5F6; 
         }

         td{
            padding-top:1.3rem;
            padding-bottom:1.3rem;
         }
         
      }
   }
`;
