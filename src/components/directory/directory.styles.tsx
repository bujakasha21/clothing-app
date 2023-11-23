import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Description = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2.5rem;
  font-family: "Open Sans Condensed";
  text-transform: uppercase;
  color: #000;
  margin-bottom: 4rem;
`;

export const SmallBorder = styled.div`
  border: 2px solid #470b0b;
  width: 9.5rem;
  margin-top: 1rem;
`;
