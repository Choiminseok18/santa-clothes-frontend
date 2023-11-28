import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { FaGithub } from "react-icons/fa";

const Foot = styled.div`
  height: 19vh;
  width: 100vw;
  margin-top: auto;
  background-color: #212529;
  position: relative;
`;

const Information = styled.div`
  color: white;
  display: grid;
  justify-content: center;
`;

const Logo = styled.h1`
  color: ${palette.gray[3]};\
  margin-top: 2.7rem;
  margin-left: 3rem;
`
const Member = styled.div`
  color: ${palette.gray[5]};
  padding-bottom: 1.5rem;
`
const Git = styled.a`
  margin-left: 8.6rem;
  text-decoration: none;
  color: white;
  font-size: 3rem;
  &:hover{
    color: ${palette.gray[6]};
  }
`

const Footer = () => {
  return (
    <Foot>
      <Information>
        <Logo>Team Code200</Logo>
        <Member>Minseok Choi · jinwon yoon · donggwon Seo</Member>
        <Git href="https://github.com/orgs/Team-Code-200/repositories"><FaGithub/></Git>
      </Information>
    </Foot>
  )
}

export default Footer;