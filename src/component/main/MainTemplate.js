import styled from "styled-components";
import firstImg from '../../component/main/Main.png';
import secondImg from '../../component/main/introduce.png';
import thirdImg from '../../component/main/thirdImg.png';

const MainTemplateBlock = styled.div`
  padding: 0;
  margin: 0;
`

const FirstBlock = styled.img`
  margin-bottom: -4px;
  width: 94.9rem;
  height: 48rem;
`;

const SecondBlock = styled.img`
  margin-bottom: -4px;
  width: 94.9rem;
  height: 48rem;
`;

const ThirdBlock = styled.img`
  margin-bottom: -4px;
  width: 94.9rem;
  height: 48rem;
`;

const MainTemplate = () => {
  return (
    <MainTemplateBlock>
      <FirstBlock src={firstImg} />
      <SecondBlock src={secondImg}/>
      <ThirdBlock src={thirdImg} />
    </MainTemplateBlock>
  );
};

export default MainTemplate;