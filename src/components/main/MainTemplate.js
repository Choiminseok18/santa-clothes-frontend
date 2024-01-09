import styled from "styled-components";
import firstImg from '../main/Main.png';
import secondImg from '../main/introduce.png';
import thirdImg from '../main/thirdImg.png';
import palette from "../../lib/styles/palette";
import {Link} from "react-router-dom";
import SlideBlock from "../common/SlideBlock";
import Todo from "../../Todo";

const MainTemplateBlock = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`

const FirstBlock = styled.div`
  background-image: url("${firstImg}");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  margin-bottom: -4px;
  width: 100vw;
  height: 100vh;
`;

const SecondBlock = styled.div`
  background-image: url("${secondImg}");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  margin-bottom: -4px;
  width: 100vw;
  height: 100vh;
`;

const ThirdBlock = styled.div`
  background-image: url("${thirdImg}");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  margin-bottom: -4px;
  width: 100vw;
  height: 100vh;
  
`;

const MainButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 0.6rem;
  color: ${palette.gray[6]};
  outline: none;
  cursor: pointer;
  margin-left: 37vw;
  margin-top: 58vh;
  
  background: ${palette.gray[2]};
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.gray[4]};
  }
`


const MainTemplate = () => {
  return (
    <MainTemplateBlock>
      <FirstBlock>
        <Link to="/donate"><MainButton>나눔 시작하기</MainButton></Link>
      </FirstBlock>

      <SecondBlock/>

      <ThirdBlock>
        <SlideBlock />
      </ThirdBlock>
    </MainTemplateBlock>
  );
};

export default MainTemplate;