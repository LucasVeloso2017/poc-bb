import styled, { css } from 'styled-components';


type TableProps = {
   noStriped?:boolean
   noRowPadding?:boolean
   rowBG?:string
}

export const TableWrapper = styled.table<TableProps>`
   width: 100%;
   border-collapse: collapse;

   tbody{
      tr{
         background-color: white;

         ${({rowBG}) => rowBG && css`
            td{
               background-color: ${rowBG};
            }
         `}

         ${({noStriped}) => !noStriped && css`
            &:nth-child(odd) {
               background-color: #ffffff;
            }

            &:nth-child(even) {
               background-color: #F0F5F6; 
            }
         `}

         ${({noRowPadding}) => !noRowPadding && css`
            td{
               padding-top:1.3rem;
               padding-bottom:1.3rem;
            }
         `}
         
         
      }
   }
`;
