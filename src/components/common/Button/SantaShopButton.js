import React from 'react';
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

const CartButton = styled.button`
  background-color: ${palette.pink[1]};
  color: white;
  font-size: large;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem;
  border-radius: 0.125rem;
  border: none;
  &:hover{
    filter: brightness(1.1);
  }
`

export default function Button({ text, onClick }) {
  return (
    <CartButton
      onClick={onClick}
    >
      {text}
    </CartButton>
  );
}
