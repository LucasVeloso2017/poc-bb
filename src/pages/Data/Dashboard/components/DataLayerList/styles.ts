
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
    padding-bottom: 1.1rem;
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
    height: 8.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f5f6;
    position: relative;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }

    .divider-wrapper{
      z-index: 1;

      .error-bg{
        width: 100%;
        right: 2rem;
        position: absolute;
        opacity: 0.7;
      }
    }
  }
`;

export const EdtechNameTableColumn = styled(BaseColumn)`
  width: 31.1rem;

  .header {
    padding-left: 2.7rem;
  }
  .row {
    padding-left: 2.7rem;
    width: 100%;

    .data-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.8rem;

      img {
        width: 3.3rem;
        height: 3.4rem;
      }

      .title {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.2rem;

        h1 {
          font-family: "Noto Sans", sans-serif;
          font-size: 1.4rem;
          font-style: normal;
          font-weight: 700;
          text-decoration: none;
          color: #354344;
        }

        span {
          font-family: "Noto Sans", sans-serif;
          font-size: 1.4rem;
          font-style: normal;
          font-weight: 400;
          text-decoration: none;
          color: #354344;
        }
      }
    }
  }
`;

export const EdtechRequestTableColumn = styled(BaseColumn)`
  width: 27rem;

  .row {
    width: 100%;

    .data-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.2rem;

      h1 {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        text-decoration: none;
        color: #24A31A;
      }

      span {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        color: #354344;
      }
    }
  }
`;

export const EdtechLineageTableColumn = styled(BaseColumn)`
  width: 27rem;

  .row {
    width: 100%;

    .data-wrapper {
      position: absolute;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.2rem;

      h1 {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        text-decoration: none;
        color: #EE593B;
      }

      span {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        color: #354344;
      }
    }
  }
`;

export const EdtechThreatedDataTableColumn = styled(BaseColumn)`
  width: 26.9rem;

  .row {
    width: 100%;

    .data-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.2rem;

      h1 {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        text-decoration: none;
        color: #24A31A;
      }

      span {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        color: #354344;
      }
    }
  }
`;

export const EdtechDetailsTableColumn = styled(BaseColumn)`
  width: 10.4rem;

  .row {
    width: 100%;

    .data-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.2rem;

      h1 {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 700;
        text-decoration: none;
        color: #24A31A;
      }

      span {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        color: #354344;
      }
    }
  }
`;