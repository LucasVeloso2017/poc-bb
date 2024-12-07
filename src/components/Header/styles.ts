import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 6.6rem;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);

  img {
    margin: 2.2rem 0.3rem 2.4rem 3.4rem;
  }
`;

export const TextHeader = styled.h1`
  font-family: 'Noto Sans', sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.2rem;
  color: #003E43;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;

  margin-left: 3.5rem;

  a {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    text-decoration: none;
    color: #003E43;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.0rem;
  margin-left: 46.0rem;

  p {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #354344;
  }

  span {
    font-family: 'Noto Sans', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #768081;
  }

  .GoDown {
    margin-left: -0.3rem;
  }
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;