import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    font-family: "Noto Sans", sans-serif;
    font-style: normal;
    color: #354344;
    font-weight: 700;
    font-size: 1.6rem;
  }

  span {
    font-family: "Noto Sans", sans-serif;
    font-style: normal;
    color: #354344;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

export const FilterWrapper = styled.div`
  width: 100%;
  height: 3.5rem;
  margin-top: 2.1rem;
  margin-bottom: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25.5rem;

  .search {
    flex: 1 1 auto;
    height: 100%;
  }

  .filters {
    width: 38.9rem;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;
export const Card = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  border: 0.1rem solid #d2d9da;
  border-radius: 1rem;
`;

export const BaseColumn = styled.div`

  .header {
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      text-decoration: none;
      color: #9da8a9;
    }
  }

  .row {
    width: 100%;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const IntegrationStatusTableCollumn = styled(BaseColumn)`
  width: 10.5rem;

   .header {
      padding-left: 2.2rem;
   }

   .row {
      padding-left: 2.2rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .status-ok{
         width: 3.5rem;
         height: 3.5rem;
         border-radius: 1rem;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #EEF6EB;
         border: 0.1rem solid #ACD49F;
      }
   }
`;

export const IntegrationNameTableColumn = styled(BaseColumn)`
  width: 18.5rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.8rem;

    img {
      width: 3.4rem;
      height: 3.3rem;
    }
  }
`;

export const IntegrationTypeTableColumn = styled(BaseColumn)`
  width: 8.7rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const IntegrationOriginDestinyTableColumn = styled(BaseColumn)`
  width: 27.9rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const IntegrationCreatedAtTableColumn = styled(BaseColumn)`
  width: 11.4rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const IntegrationPlayedAtTableColumn = styled(BaseColumn)`
  width: 11.9rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;


export const IntegrationStopedAtTableColumn = styled(BaseColumn)`
  width: 11.6rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const IntegrationActionsTableColumn = styled(BaseColumn)`
  width: 21.9rem;

  .header{
    justify-content: center;
  }

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;


    .controls{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.3rem;

      img{
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;