import styled from "styled-components";

import {
  BaseButton,
  InvertedSignInButton,
  GoogleSignInButton,
} from "../button/button.stlyes";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${InvertedSignInButton}, 
  ${GoogleSignInButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 290px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
