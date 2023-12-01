import styled, { keyframes } from "styled-components";
import bgDark from "../../shared/assets/bg-dark.png";
import bgLight from "../../shared/assets/bg-light.png";
import { AddPrefixToType } from "../../shared/types/global.types";
import { IHomeContainerStyle } from "./Home.types";

export const Container = styled.main<AddPrefixToType<IHomeContainerStyle>>`
  gap: 2rem;
  height: 100%;
  display: flex;
  padding: 4rem;
  padding-bottom: 0;
  position: relative;
  align-items: center;
  flex-direction: column;
  background: ${({ $theme }) =>
    `url(${$theme === "light" ? bgLight : bgDark}) center center fixed`};
  background-size: cover;

  * {
    color: ${({ $theme }) => ($theme === "light" ? "inherit" : "white")};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background-color: #00000007;
  border: 1.5px solid #00000015;
  backdrop-filter: blur(10px);
  box-shadow: 2px 29px 45px -30px rgba(0, 0, 0, 0.95);
`;

export const ThemeButton = styled.button`
  position: relative;
  position: absolute;
  top: 2rem;
  right: 4rem;
  border-radius: 1rem;
  background-color: #55555510;
  border: 1px solid #00000005;
  box-shadow: 2px 5px 10px -3px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-size: 3.2rem;
`;

export const Subtitle = styled.strong`
  margin-top: 0.5rem;
  font-weight: 500;
  opacity: 0.7;
`;

const logoSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }`;

export const Logo = styled.img`
  width: 7.5rem;
  margin-bottom: 2rem;

  @media (prefers-reduced-motion: no-preference) {
    //animation: ${logoSpin} infinite 20s linear;
  }
`;
