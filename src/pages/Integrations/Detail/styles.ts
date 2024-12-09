import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.7rem;

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

export const InfoDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5.6rem;

  .itens-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    margin: 2.8rem 0 2.8rem 2.8rem;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      font-style: normal;
      line-height: 2rem;
      color: #00808a;
    }

    p {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.6rem;
      font-weight: 600;
      font-style: normal;
      line-height: 2rem;
      color: #354344;
    }
  }
`;

export const GrafficDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  gap: 2.4rem;
`;

export const IntegrationsWrapper = styled.div`
  width: 100%;
  height: 44.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
    padding-top: 1.6rem;
    padding-left: 1.9rem;

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.8rem;

      h1 {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        font-style: normal;
        line-height: normal;
        color: #354344;
      }
    }

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #354344;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    margin-top: 2.4rem;
  }
`;

export const EdTechNameTableCollumn = styled.div`
  width: 31rem;

  .table-header {
    padding-left: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const EdTechStatusTableCollumn = styled.div`
  width: 29rem;

  .table-header {
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

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }

    .green-dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 100rem;
      background-color: #24a31a;
      outline: 0.3rem solid #acd49f;
      margin-right: 1.1rem;
    }
  }
`;

export const TimestampMetric = styled.div`
  width: 100%;
  height: 30.7rem;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
    padding-top: 1.6rem;
    padding-left: 1.9rem;

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.8rem;

      h1 {
        font-family: "Noto Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        font-style: normal;
        line-height: normal;
        color: #354344;
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
  }
`;
export const EdTechDatalog = styled.div`
  width: 100%;
  padding-top: 1.3rem;
`;

export const EdTechDatalogStatusTableCollumn = styled.div`
  width: 10.4rem;

  .table-header {
    padding-left: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }

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

export const EdTechDatalogDescriptionTableCollumn = styled.div`
  width: 19.2rem;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const EdTechDatalogDateStartTableCollumn = styled.div`
  width: 16.5rem;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const EdTechDatalogDateEndTableCollumn = styled.div`
  width: 24.6rem;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const EdTechDatalogLatencyTableCollumn = styled.div`
  width: 17.8rem;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const EdTechDatalogProcessTableCollumn = styled.div`
  width: 20.6rem;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;

export const EdTechDatalogErrorTableCollumn = styled.div`
  width: 13.2rem;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      color: #9da8a9;
    }
  }

  .table-row {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      font-family: "Noto Sans", sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: #354344;
    }
  }
`;