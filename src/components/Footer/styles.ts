import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 1rem 0;
  width: 144.0rem;
  height: 6.2rem;
`;

export const Container = styled.footer`
  background-color: white;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: black;
    font-style: normal;
  }

  span {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    font-style: normal;
    color: turquoise;
  }
`;