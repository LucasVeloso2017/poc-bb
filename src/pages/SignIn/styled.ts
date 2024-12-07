import styled from "styled-components";

import LoginBackground from "../../assets/login-cover.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;

export const Background = styled.div`
  width: 100%; 
  height: 100vh;
  background: url(${LoginBackground}) no-repeat center;
  background-size: cover;

  img {
    width: 26.7rem;
    height: 10.8rem;
    margin: 6.0rem 11.6rem 0 9.0rem;
  }
`;

export const FormContainer = styled.form`
  width: 45rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.4rem;
  background-color: #FFFF;
  padding: 2.5rem 1.8rem;
  border-radius: 1rem;

  h1{
    font-family: 'Inter', sans-serif;
    font-size: 2.0rem;
    font-weight: 700;
    font-style: normal;
  }

  .input-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap:0.4rem;

    label {
      font-family: 'Inter', sans-serif;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      color: gray;
    }

    input {
      display: flex;
      width: 100%;
      border: 1px solid #cecece;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1.6rem;
      outline: none;
      transition: all 0.3s ease-in-out;
      border-radius: 0.4rem;
      font-size: 1.4rem;
      color: gray;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    button{
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      cursor: pointer;
    }

    .submit{
      width: 100%;
      height: 5.6rem;
      background-color: #03BAC6;
      border-radius: 0.5rem;
      
      color: white;
      font-family: 'Inter', sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      font-style: normal;
    }

    .ms-auth{
      width: 100%;
      height: 5.6rem;
      background-color: #FFF;
      border-radius: 0.5rem;
      border:0.1rem solid black;
      
      color: black;
      font-family: 'Inter', sans-serif;
      font-size: 1.8rem;
      font-weight: 500;
      font-style: normal;
    }
  }

  a {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    color: black;
  } 
`;
