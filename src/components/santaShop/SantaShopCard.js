import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const List = styled.li`
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  overflow: hidden;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    transform: scale(1.05);
  } 
`

const Image = styled.img`
  width: 100%;
`
const Info = styled.div`
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default function SantaShopCard({
                                      product,
                                      product: { id, image, title, price },
                                    }) {
  const navigate = useNavigate();
  return (
    <List
      onClick={() => {
        navigate(`/santa-shop/${id}`, { state: { product } });
      }}
    >
      <Image src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <p>{`${price} SP`}</p>
      </Info>
    </List>
  );
}