import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button/Button";
import PostList from "../common/PostList";
import palette from "../../lib/styles/palette";
import { Image } from '@chakra-ui/react';
import santaIcon from './santaIcon.png';

const Header = styled.div`
  display: flex;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  margin-top: 6.5vh;
  margin-left: 14.65vw;
`;

const Find = styled.div`
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
const onHandleClick = () => {
  window.location.href="/find/write";
}

const FindTemplate = () => {
  return (
    <>
      <Header>
        <Icon>
          <Image src={santaIcon} alt='Santa' />
        </Icon>
        <Find>
          <h1>요청 게시판</h1>
          <h2 style={{color: palette.gray[6]}}>나눔 받고 싶은 물품이 있다면 이곳에 등록해주세요</h2>
        </Find>
        <StyledButton onClick={onHandleClick}>글쓰기</StyledButton>
      </Header>

      <Line />


    </>
  );
}

export default FindTemplate;