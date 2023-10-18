import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 55px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 12px;
`;
