import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import {addOrUpdateToCart} from "../../lib/api/firebase";
import SantaShopButton from '../common/Button/SantaShopButton';
import {useParams} from "react-router";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  margin: 5vh 20vw;
`

const Image = styled.img`
  width: 50vw;
  height: 60vh;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-basis: 58.333333%;
`

const Info = styled.div`
  width: 100%;
  flex-basis: 41.666667%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 10vh;
`

const Title = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const Price = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-color: rgb(156 163 175);
`

const Option = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label`
  color: ${palette.pink[1]};
  font-weight: 700;
`

const Input = styled.input`
  padding: 0.5rem;
  margin: 1rem;
  flex: 1 1 0%;
  border-width: 2px;
  border-style: dashed;
  border-color: ${palette.pink[1]};
  outline: 2px solid transparent;
  outline-offset: 2px;
`



export default function ProductDetail() {
  const { Id } = useParams();

  const {
    state: {
      product: { id, image, title, price, options },
    },
  } = useLocation();

  const handleClick = (e) => {
    alert("장바구니에 추가되었습니다.")
    const product = { id, image, title, price, quantity: e.target.value };
    addOrUpdateToCart(Id, product);
  };

  return (
    <>
      <Section>
        <Image src={image} alt={title} />
        <Info>
          <Title>{title}</Title>
          <Price>
            {price} SP
          </Price>
          <Option>
            <Label htmlFor='select'>
              수량:
            </Label>
            <Input type="number" name="quatity" min="1" max="100"/>
          </Option>
          <SantaShopButton text='장바구니에 추가' onClick={handleClick} />
        </Info>
      </Section>
    </>
  );
}
