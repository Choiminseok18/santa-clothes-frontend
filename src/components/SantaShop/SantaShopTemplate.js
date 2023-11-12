import {Image} from "@chakra-ui/react";
import giftIcon from "./giftIcon.png";
import palette from "../../lib/styles/palette";
import React from "react";
import styled from "styled-components";


const Header = styled.div`
  display: flex;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;


const SantaShop = styled.div`
  margin-left: 7vw;
`

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  margin-left: 17vw;
  margin-top: 2vh;
`

const Line = styled.hr`
  margin-left: 14vw;
  width: 70vw;
  color: ${palette.gray[2]};
`


const santaShopTemplate = ({id}) => {
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
    </>
  );
};

export default santaShopTemplate;