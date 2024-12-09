import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.8rem;

  .go-back{
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .controls{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
`

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

export const Card = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  border: 0.1rem solid #d2d9da;
  border-radius: 1rem;
`;


const BaseColumn = styled.div`
  .header {
    padding-top: 2.1rem;
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
    padding-top: 1rem;
    padding-bottom: 1rem;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const UserIDTableColumn = styled(BaseColumn)`
  width: 10.9rem;

  .header {
    padding-left: 2.2rem;
  }
  .row {
    padding-left: 2.2rem;
    width: 100%;
  }
`;

export const UserNameTableColumn = styled(BaseColumn)`
  width: 20.3rem;

  .row {
    width: 100%;
  }
`;

export const UserRegionTableColumn = styled(BaseColumn)`
  width: 12.7rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserSecretaryTableColumn = styled(BaseColumn)`
  width: 21.3rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserEmailTableColumn = styled(BaseColumn)`
  width: 25.1rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserPhoneTableColumn = styled(BaseColumn)`
  width: 15.3rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserBirthdayTableColumn = styled(BaseColumn)`
  width: 16.8rem;

  .header {
    span {
      text-align: start;
    }
  }
  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
