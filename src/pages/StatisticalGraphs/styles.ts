import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6fafa;
`;

export const TextLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3.8rem;

  h1 {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #354344;
  }
`;

export const Display = styled.div`
  width: 100%;
  border: 1px solid #D2D9DA;
  border-radius: 1rem;
  background-color: #fff;
  margin-top: 1.6rem;
  display: flex;
  flex-direction: row;
  gap: 5.6rem;

  .itens-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    margin: 2.8rem 0 2.8rem 2.8rem;

    span {
      font-family: 'Noto Sans', sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      font-style: normal;
      line-height: 2.0rem;
      color: #00808A;
    }

    p {
      font-family: 'Noto Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 600;
      font-style: normal;
      line-height: 2.0rem;
      color: #354344;
    }
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.4rem;
  gap: 2.4rem;
`;

export const GraphicDisplay = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 44.4rem;
  background-color: #fff;
  border: 1px solid #D2D9DA;
  border-radius: 1rem;

  .text-and-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;

    margin: 2.2rem 39.0rem 0 2.0rem; 

    > h1 {
      font-family: 'Noto Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 700;
      font-style: normal;
      line-height: normal;
      color: #354344;
    }
  }

  > p {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #354344;

    margin: 1rem 46.6rem 0 2.0rem;
  }
`;

export const TimeGraphic = styled.div`
  width: 100%;
  height: 30rem;

  margin-top: 2.4rem;
  
  border: 1px solid #D2D9DA;
  border-radius: 1rem;
  background-color: #fff;

  .text-and-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;

    margin: 2.2rem 39.0rem 0 2.0rem; 

    > h1 {
      font-family: 'Noto Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 700;
      font-style: normal;
      line-height: normal;
      color: #354344;
    }
  }
`;

export const BoxTable = styled.div`
  width: 100%;
  height: 15.6rem;
  
  border: 1px solid #D2D9DA;
  border-radius: 1rem;
  background-color: #fff;
  margin-top: 2.4rem;
`;

