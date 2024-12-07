import styled from "styled-components";

import LoginBackground from "../../assets/LoginImg.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Background = styled.div`
  width: 100%; 
  flex: 1;
  background: url(${LoginBackground}) no-repeat center;
  background-size: cover;

  > img {
    width: 38%;
    height: auto;

    padding: 6.0rem 11.6rem 0 9.0rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    width: 45.0rem;
    height: 45.0rem;
    flex-shrink: 0;

    background-color: white;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
  }

  label {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    color: gray;
  }

  input {
    display: flex;
    height: 3.6rem;
    width: 40rem;
    margin-top: 1rem;
    border: 1px solid #cecece;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    outline: none;
    transition: all 0.3s ease-in-out;
    border-radius: 0.6rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .first {
    width: 40rem;
    height: 5.4rem;
    background-color: turquoise;
    border-radius: 0.5rem;
    
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    font-style: normal;
  }

  .second {
    width: 40rem;
    height: 5.4rem;
    background-color: white;
    border-radius: 0.5rem;
    
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    font-style: normal;
  }

  a {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: none;
    color: black;
  }
`;

export const Title = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 2.0rem;
  font-weight: 700;
  font-style: normal;
  color: black;

  margin: 3rem 26rem 2rem 0;
`;