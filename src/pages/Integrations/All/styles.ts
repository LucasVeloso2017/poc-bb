import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderRow = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;

   a{
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      font-family: "Noto Sans", sans-serif;
      font-style: normal;
      color: #354344;
      font-weight:700;
      font-size: 1.6rem;
   }

   span{
      font-family: "Noto Sans", sans-serif;
      font-style: normal;
      color: #354344;
      font-weight:400;
      font-size: 1.4rem;
   }
`

export const FilterWrapper = styled.div`
   width: 100%;
   height: 3.5rem;
   margin-top: 2.1rem;

   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 25.5rem;

   .search{
      flex: 1 1 auto;
      height: 100%;
   }

   .filters{
      width: 38.9rem;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 1.2rem;

   }
`