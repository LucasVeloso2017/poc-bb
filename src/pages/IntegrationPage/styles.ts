import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F6FAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  margin: 0 auto;

  h1 {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    font-style: normal;
    line-height: normal;
    color: #354344;

    margin: 3.2rem 88.2rem 0 42.0rem;
  }

  label {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #354344;
  }

  input {
    display: flex;
    padding: 0.8rem 1.2rem;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;

    border-radius: 0.6rem;
    border: 1px solid #354344;
    background: #fff;

    width: 60.0rem;
    height: 3.4rem;
    margin-top: 0.8rem;
  }

  .checkbox-group {
   display: flex;
   gap: 5.6rem;
   margin-top: 2.4rem;
  }

  .checkbox-inline {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    user-select: none;

    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    color: #354344;
  }

.checkbox-inline input {
    position: absolute;
    opacity: 0; 
    cursor: pointer;
    }

.custom-check {
    width: 2.4rem;
    height: 2.4rem;
    background-color: #fff;
    border: 1px solid #354344;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.8rem;
    transition: 0.3s;
  }

.checkbox-inline input:checked ~ .custom-check {
    background-color: #4caf50;
    border-color: #4caf50;
  }

.checkbox-inline input:checked ~ .custom-check::after {
    content: "";
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background-color: white;
    border-radius: 50%;
    margin: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .input-date {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 2.4rem;

    margin-top: 3.2rem;

    > label {
      display: block;
      margin-bottom: 0.8rem;
    }

    > .input-label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > input {
        width: 28.8rem;
      }
    }
  }

  .only-one-input {
    margin-top: 3.2rem;

    > label {
      font-family: 'Noto Sans', sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: #354344;
    }
  }

  .dayly-check {
   display: flex;
   gap: 4.6rem;
   margin: 2.4rem 42.0rem 0 45.6rem;
   flex-wrap: wrap;
  }

  .checkbox-inline-dayly {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    cursor: pointer;
    user-select: none;

    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    color: #354344;
  }

.checkbox-inline-dayly input {
    position: absolute;
    opacity: 0; 
    cursor: pointer;
    }

.custom-check-dayly {
    width: 2.4rem;
    height: 2.4rem;
    background-color: #fff;
    border: 1px solid #354344;
    border-radius: 0.6rem;
    display: inline-block;
    margin-right: 0.8rem;
    transition: 0.3s;
  }

.checkbox-inline-dayly input:checked ~ .custom-check {
    background-color: #4caf50;
    border-color: #4caf50;
  }

.checkbox-inline-dayly input:checked ~ .custom-check::after {
    content: "";
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background-color: white;
    border-radius: 0.6rem;
    margin: auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

    margin: 5.0rem 42.0rem 0 84.8rem;

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