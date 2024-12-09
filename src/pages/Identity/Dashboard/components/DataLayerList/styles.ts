import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #d2d9da;

  .tabs {
    margin-left: 2.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    .item {
      cursor: pointer;
      padding: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        color: #003e43;

        position: relative;
      }
    }

    .active {
      span {
        font-weight: 600;
      }
      span::before {
        content: "";
        position: absolute;
        bottom: -19px;
        width: 100%;
        height: 0.4rem;
        border-top-right-radius: 0.4rem;
        border-top-left-radius: 0.4rem;
        background-color: #00aeba;
      }
    }
  }

  .filters {
    margin-right: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.1rem;

    .search {
      width: 20.6rem;
    }
  }
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
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const UserNameTableColumn = styled(BaseColumn)`
  width: 19rem;

  .header {
    padding-left: 1.9rem;
  }
  .row {
    padding-left: 1.9rem;
    width: 100%;
  }
`;

export const UserRegionTableColumn = styled(BaseColumn)`
  width: 9.5rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserSecretaryTableColumn = styled(BaseColumn)`
  width: 18.1rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserEmailTableColumn = styled(BaseColumn)`
  width: 21.9rem;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const UserPhoneTableColumn = styled(BaseColumn)`
  width: 12.1rem;

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

export const UserStatusTableColumn = styled(BaseColumn)`
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

    .blue-dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 100rem;
      background-color: #00AEBA;
      outline: 0.3rem solid #95E0E6;
      margin-right: 1.1rem;
    }
  }
`;