import styled from "styled-components";

import LoginBackground from "../../assets/LoginImg.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Background = styled.div`
  width: 100%; 
  height: 100vh;
  background: url(${LoginBackground}) no-repeat center;
  background-size: cover;
  position: absolute;

  > img {
    width: 38%;
    height: auto;
    position: relative;

    padding: 6.0rem 11.6rem 0 9.0rem;
  }
`;