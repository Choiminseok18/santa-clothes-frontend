import {Image} from "@chakra-ui/react";
import giftIcon from "./giftIcon.png";
import palette from "../../lib/styles/palette";
import React from "react";
import styled from "styled-components";
import { getProducts } from "../../lib/api/firebase";
import {useQuery} from "@tanstack/react-query";
import SantaShopCard from "./SantaShopCard";


const Header = styled.div`
  display: flex;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;


const SantaShop = styled.div`
  margin-left: 6vw;
`

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  margin-left: 27vw;
  margin-top: 2vh;
`

const Line = styled.hr`
  margin-left: 14vw;
  width: 70vw;
  color: ${palette.gray[2]};
`

const CardList = styled.ul`
  margin: 5vh 25vw;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem;
`


const SantaShopTemplate = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });


  return (
    <>
    <Header>
      <Icon>
        <Image src={giftIcon} alt='Santa' />
      </Icon>
      <SantaShop>
        <h1>산타 샵</h1>
        <h2 style={{color: palette.gray[6]}}>나눔을 통해 얻은 산타 포인트로 필요한 물건을 쇼핑 해보세요</h2>
      </SantaShop>
    </Header>
      <Line />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <CardList>
        {products &&
          products.map((product) => (
            <SantaShopCard key={product.id} product={product} />
          ))}
      </CardList>

    </>
  );
};

export default SantaShopTemplate;