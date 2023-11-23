import styled from "styled-components";

import image from "../../assets/BackgroundImage.png";
import { Link } from "react-router-dom";

export const HeroBackgroundImage = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${image});
  background-size: cover;
  border-radius: 20px;
  margin-bottom: 100px;
  box-shadow: 0px 0px 48px 1px #413f42;
  -webkit-box-shadow: 0px 0px 48px 1px #413f42;
  -moz-box-shadow: 0px 0px 48px 1px #413f42;
`;

export const HeadingTitle = styled.h1`
  text-transform: uppercase;
  font-size: 4.5rem;
  color: #fff;
  font-weight: 600;
  margin: 11rem auto 4.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #470b0b;
  border-radius: 20px;
  border-width: 0.7rem;
`;

export const LinkButton = styled(Link)`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  font-size: 20px;

  &:hover {
    background-color: #470b0b;
    color: #fff;
    border: 2px solid #fff;
  }
`;
