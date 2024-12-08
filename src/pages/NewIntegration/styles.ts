import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  background-color: #F6FAFA;

  h1 {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #354344;

    margin: 3.2rem 78.0rem 0 42.0rem;
  }

  .input-wrapper {
    margin-top: 2.4rem;
  }
  
  label {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    font-style: normal;
    line-height: normal;
    color: #354344;
  }

  input {
    display: flex;
    padding: 0.8rem 1.2rem;
    align-items: center;
    gap: 1rem;
    margin-top: 0.8rem;
    border-radius: 0.6rem;
    border: 1px solid #D2D9DA;
    background: #fff;

    color: #768081;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    font-style: normal;
    line-height: normal;
    width: 60.0rem;
    height: 3.4rem;

    margin-bottom: 3.2rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

    margin: 3.2rem 42.0rem 0 84.8rem;

    .cancel {
      display: flex;
      padding: 0.8rem 1.2rem;
      justify-content: center;
      align-items: center;
      width: 8.0rem;
      border-radius: 0.4rem;
      border: 1px solid #D2D9DA;
      background-color: #fff;

      color: #354344;
      font-family: 'Noto Sans', sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .next {
      display: flex;
      padding: 0.8rem 1.2rem;
      justify-content: center;
      align-items: center;
      width: 8.0rem;
      border-radius: 0.4rem;
      background: #00AEBA;
      border: none;

      color: #fff;
      font-family: 'Noto Sans', sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;