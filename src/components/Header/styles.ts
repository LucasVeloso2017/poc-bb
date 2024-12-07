import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 6.6rem;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3.4rem;
  gap: 1.5rem;

  h1 {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem;
    color: #003e43;
  }
`;

export const TabsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  margin-left: 3.5rem;

  .item {
    height: 100%;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
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
    a::before {
      content: "";
      position: absolute;
      bottom: 0;
      top: 40px;
      width: 100%;
      height: 0.4rem;
      border-top-right-radius: 0.4rem;
      border-top-left-radius: 0.4rem;
      background-color: #00aeba;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex:1 1 auto;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  margin-right: 4rem;

  p {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #354344;
  }

  span {
    font-family: "Noto Sans", sans-serif;
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

export const FullscreenFiltersWrapper = styled.div`
    display: flex;
    flex:1 1 auto;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    margin-right: 5rem;
`